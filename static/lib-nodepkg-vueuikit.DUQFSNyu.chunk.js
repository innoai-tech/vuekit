import { f as component, j as jsx, i as Transition, c as createProvider, k as onMounted, e as ref, S as SymbolForwardRef, l as isComponent, m as isPropTypes, n as onBeforeMount, b as cloneVNode, g as ref$1, u as unref, p as onBeforeUnmount, r as rx, q as toObservable, T as Teleport, s as subscribeUntilUnmount, t as tapEffect, o as observableRef, d as jsxs, F as Fragment } from './lib-nodepkg-vuekit.Dc0bMx8m.chunk.js';
import { c as custom } from './lib-nodepkg-typedef.CPsLm4bM.chunk.js';
import { k as kebabCase, g as get, i as isPlainObject, l as last, s as set, f as isEmpty, h as isString$1, j as has, m as keys, e as isObject, o as omit, n as mapValues, q as pickBy, r as some, b as isFunction, a as isUndefined, c as isNumber, t as camelCase, u as padStart } from './vendor-innoai-tech-lodash.DAei4CjR.chunk.js';
import { _ as __rest, c as combineLatest } from './vendor-rxjs.BSEFRfiZ.chunk.js';

var invariant = function() {
};

const clamp$2 = (min, max, v) => Math.min(Math.max(v, min), max);

const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration = 10.0;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1, }) {
    let envelope;
    let derivative;
    let dampingRatio = 1 - bounce;
    dampingRatio = clamp$2(minDamping, maxDamping, dampingRatio);
    duration = clamp$2(minDuration, maxDuration, duration / 1000);
    if (dampingRatio < 1) {
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -1e-3 + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = duration * 1000;
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = Object.assign({ velocity: 0.0, stiffness: 100, damping: 10, mass: 1.0, isResolvedFromDuration: false }, options);
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        const derived = findSpring(options);
        springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0.0, mass: 1.0 });
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring(_a) {
    var { from = 0.0, to = 1.0, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
    const state = { done: false, value: from };
    let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration, } = getSpringOptions(options);
    let resolveSpring = zero;
    let resolveVelocity = zero;
    function createSpring() {
        const initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        const initialDelta = to - from;
        const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
        if (restDelta === undefined) {
            restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
        }
        if (dampingRatio < 1) {
            const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
            resolveSpring = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (to -
                    envelope *
                        (((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) /
                            angularFreq) *
                            Math.sin(angularFreq * t) +
                            initialDelta * Math.cos(angularFreq * t)));
            };
            resolveVelocity = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return (dampingRatio *
                    undampedAngularFreq *
                    envelope *
                    ((Math.sin(angularFreq * t) *
                        (initialVelocity +
                            dampingRatio *
                                undampedAngularFreq *
                                initialDelta)) /
                        angularFreq +
                        initialDelta * Math.cos(angularFreq * t)) -
                    envelope *
                        (Math.cos(angularFreq * t) *
                            (initialVelocity +
                                dampingRatio *
                                    undampedAngularFreq *
                                    initialDelta) -
                            angularFreq *
                                initialDelta *
                                Math.sin(angularFreq * t)));
            };
        }
        else if (dampingRatio === 1) {
            resolveSpring = (t) => to -
                Math.exp(-undampedAngularFreq * t) *
                    (initialDelta +
                        (initialVelocity + undampedAngularFreq * initialDelta) *
                            t);
        }
        else {
            const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = (t) => {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                const freqForT = Math.min(dampedAngularFreq * t, 300);
                return (to -
                    (envelope *
                        ((initialVelocity +
                            dampingRatio * undampedAngularFreq * initialDelta) *
                            Math.sinh(freqForT) +
                            dampedAngularFreq *
                                initialDelta *
                                Math.cosh(freqForT))) /
                        dampedAngularFreq);
            };
        }
    }
    createSpring();
    return {
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                const currentVelocity = resolveVelocity(t) * 1000;
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? to : current;
            return state;
        },
        flipTarget: () => {
            velocity = -velocity;
            [from, to] = [to, from];
            createSpring();
        },
    };
}
spring.needsInterpolation = (a, b) => typeof a === "string" || typeof b === "string";
const zero = (_t) => 0;

const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

const mix = (from, to, progress) => -progress * from + progress * to + from;

const clamp$1 = (min, max) => (v) => Math.max(Math.min(v, max), min);
const sanitize = (v) => (v % 1 ? Number(v.toFixed(5)) : v);
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
    return typeof v === 'string';
}

const number = {
    test: (v) => typeof v === 'number',
    parse: parseFloat,
    transform: (v) => v,
};
const alpha$1 = Object.assign(Object.assign({}, number), { transform: clamp$1(0, 1) });
Object.assign(Object.assign({}, number), { default: 1 });

const createUnitType = (unit) => ({
    test: (v) => isString(v) && v.endsWith(unit) && v.split(' ').length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const percent = createUnitType('%');
Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });

const isColorString = (type, testProp) => (v) => {
    return Boolean((isString(v) && singleColorRegex.test(v) && v.startsWith(type)) ||
        (testProp && Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (!isString(v))
        return v;
    const [a, b, c, alpha] = v.match(floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};

const hsla = {
    test: isColorString('hsl', 'hue'),
    parse: splitColor('hue', 'saturation', 'lightness'),
    transform: ({ hue, saturation, lightness, alpha: alpha$1$1 = 1 }) => {
        return ('hsla(' +
            Math.round(hue) +
            ', ' +
            percent.transform(sanitize(saturation)) +
            ', ' +
            percent.transform(sanitize(lightness)) +
            ', ' +
            sanitize(alpha$1.transform(alpha$1$1)) +
            ')');
    },
};

const clampRgbUnit = clamp$1(0, 255);
const rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
const rgba = {
    test: isColorString('rgb', 'red'),
    parse: splitColor('red', 'green', 'blue'),
    transform: ({ red, green, blue, alpha: alpha$1$1 = 1 }) => 'rgba(' +
        rgbUnit.transform(red) +
        ', ' +
        rgbUnit.transform(green) +
        ', ' +
        rgbUnit.transform(blue) +
        ', ' +
        sanitize(alpha$1.transform(alpha$1$1)) +
        ')',
};

function parseHex(v) {
    let r = '';
    let g = '';
    let b = '';
    let a = '';
    if (v.length > 5) {
        r = v.substr(1, 2);
        g = v.substr(3, 2);
        b = v.substr(5, 2);
        a = v.substr(7, 2);
    }
    else {
        r = v.substr(1, 1);
        g = v.substr(2, 1);
        b = v.substr(3, 1);
        a = v.substr(4, 1);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: isColorString('#'),
    parse: parseHex,
    transform: rgba.transform,
};

const color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else {
            return hex.parse(v);
        }
    },
    transform: (v) => {
        return isString(v)
            ? v
            : v.hasOwnProperty('red')
                ? rgba.transform(v)
                : hsla.transform(v);
    },
};

const colorToken = '${c}';
const numberToken = '${n}';
function test(v) {
    var _a, _b, _c, _d;
    return (isNaN(v) &&
        isString(v) &&
        ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0);
}
function analyse$1(v) {
    if (typeof v === 'number')
        v = `${v}`;
    const values = [];
    let numColors = 0;
    const colors = v.match(colorRegex);
    if (colors) {
        numColors = colors.length;
        v = v.replace(colorRegex, colorToken);
        values.push(...colors.map(color.parse));
    }
    const numbers = v.match(floatRegex);
    if (numbers) {
        v = v.replace(floatRegex, numberToken);
        values.push(...numbers.map(number.parse));
    }
    return { values, numColors, tokenised: v };
}
function parse$1(v) {
    return analyse$1(v).values;
}
function createTransformer(v) {
    const { values, numColors, tokenised } = analyse$1(v);
    const numValues = values.length;
    return (v) => {
        let output = tokenised;
        for (let i = 0; i < numValues; i++) {
            output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === 'number' ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parse$1(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = { test, parse: parse$1, createTransformer, getAnimatableNone };

function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}

const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
const mixColor = (from, to) => {
    let fromColorType = getColorType(from);
    let toColorType = getColorType(to);
    let fromColor = fromColorType.parse(from);
    let toColor = toColorType.parse(to);
    if (fromColorType === hsla) {
        fromColor = hslaToRgba(fromColor);
        fromColorType = rgba;
    }
    if (toColorType === hsla) {
        toColor = hslaToRgba(toColor);
        toColorType = rgba;
    }
    const blended = Object.assign({}, fromColor);
    return (v) => {
        for (const key in blended) {
            if (key !== "alpha") {
                blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};

const isNum = (v) => typeof v === 'number';

const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);

function getMixer(origin, target) {
    if (isNum(origin)) {
        return (v) => mix(origin, target, v);
    }
    else if (color.test(origin)) {
        return mixColor(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
const mixArray = (from, to) => {
    const output = [...from];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
    return (v) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
const mixObject = (origin, target) => {
    const output = Object.assign(Object.assign({}, origin), target);
    const blendValue = {};
    for (const key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    const parsed = complex.parse(value);
    const numValues = parsed.length;
    let numNumbers = 0;
    let numRGB = 0;
    let numHSL = 0;
    for (let i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === "number") {
            numNumbers++;
        }
        else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            }
            else {
                numRGB++;
            }
        }
    }
    return { parsed, numNumbers, numRGB, numHSL };
}
const mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyse(origin);
    const targetStats = analyse(target);
    const canInterpolate = originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers;
    if (canInterpolate) {
        return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
    }
    else {
        return (p) => `${p > 0 ? target : origin}`;
    }
};

const mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    }
    else if (typeof v === 'string') {
        if (color.test(v)) {
            return mixColor;
        }
        else {
            return mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return mixArray;
    }
    else if (typeof v === 'object') {
        return mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate([from, to], [mixer]) {
    return (v) => mixer(progress(from, to, v));
}
function slowInterpolate(input, mixers) {
    const inputLength = input.length;
    const lastInputIndex = inputLength - 1;
    return (v) => {
        let mixerIndex = 0;
        let foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            let i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length);
    invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1);
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const interpolator = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return isClamp
        ? (v) => interpolator(clamp$2(input[0], input[inputLength - 1], v))
        : interpolator;
}

const mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
const createExpoIn = (power) => p => Math.pow(p, power);

const linear = p => p;
const easeIn = createExpoIn(2);
const easeInOut = mirrorEasing(easeIn);

function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
    const numValues = values.length;
    return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}
function keyframes({ from = 0, to = 1, ease, offset, duration = 300, }) {
    const state = { done: false, value: from };
    const values = Array.isArray(to) ? to : [from, to];
    const times = convertOffsetToTimes(offset && offset.length === values.length
        ? offset
        : defaultOffset(values), duration);
    function createInterpolator() {
        return interpolate(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease),
        });
    }
    let interpolator = createInterpolator();
    return {
        next: (t) => {
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
        },
        flipTarget: () => {
            values.reverse();
            interpolator = createInterpolator();
        },
    };
}

function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget, }) {
    const state = { done: false, value: from };
    let amplitude = power * velocity;
    const ideal = from + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    if (target !== ideal)
        amplitude = target - from;
    return {
        next: (t) => {
            const delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
        },
        flipTarget: () => { },
    };
}

const types = { keyframes, spring, decay };
function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
        return keyframes;
    }
    else if (types[config.type]) {
        return types[config.type];
    }
    const keys = new Set(Object.keys(config));
    if (keys.has("ease") ||
        (keys.has("duration") && !keys.has("dampingRatio"))) {
        return keyframes;
    }
    else if (keys.has("dampingRatio") ||
        keys.has("stiffness") ||
        keys.has("mass") ||
        keys.has("damping") ||
        keys.has("restSpeed") ||
        keys.has("restDelta")) {
        return spring;
    }
    return keyframes;
}

const defaultTimestep = (1 / 60) * 1000;
const getCurrentTime = typeof performance !== "undefined"
    ? () => performance.now()
    : () => Date.now();
const onNextFrame = typeof window !== "undefined"
    ? (callback) => window.requestAnimationFrame(callback)
    : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

function createRenderStep(runNextFrame) {
    let toRun = [];
    let toRunNextFrame = [];
    let numToRun = 0;
    let isProcessing = false;
    let flushNextFrame = false;
    const toKeepAlive = new WeakSet();
    const step = {
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentFrame && isProcessing)
                    numToRun = toRun.length;
            }
            return callback;
        },
        cancel: (callback) => {
            const index = toRunNextFrame.indexOf(callback);
            if (index !== -1)
                toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
        },
        process: (frameData) => {
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
            toRunNextFrame.length = 0;
            numToRun = toRun.length;
            if (numToRun) {
                for (let i = 0; i < numToRun; i++) {
                    const callback = toRun[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}

const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
let isProcessing = false;
const frame = {
    delta: 0,
    timestamp: 0,
};
const stepsOrder = [
    "read",
    "update",
    "preRender",
    "render",
    "postRender",
];
const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(() => (runNextFrame = true));
    return acc;
}, {});
const sync = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process, keepAlive = false, immediate = false) => {
        if (!runNextFrame)
            startLoop();
        return step.schedule(process, keepAlive, immediate);
    };
    return acc;
}, {});
const cancelSync = stepsOrder.reduce((acc, key) => {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
stepsOrder.reduce((acc, key) => {
    acc[key] = () => steps[key].process(frame);
    return acc;
}, {});
const processStep = (stepId) => steps[stepId].process(frame);
const processFrame = (timestamp) => {
    runNextFrame = false;
    frame.delta = useDefaultElapsed
        ? defaultTimestep
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (runNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
const startLoop = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
        onNextFrame(processFrame);
};

function loopElapsed(elapsed, duration, delay = 0) {
    return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
    return isForwardPlayback
        ? loopElapsed(duration + -elapsed, duration, delay)
        : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}

const framesync = (update) => {
    const passTimestamp = ({ delta }) => update(delta);
    return {
        start: () => sync.update(passTimestamp, true),
        stop: () => cancelSync.update(passTimestamp),
    };
};
function animate(_a) {
    var _b, _c;
    var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let { to } = options;
    let driverControls;
    let repeatCount = 0;
    let computedDuration = options.duration;
    let latest;
    let isComplete = false;
    let isForwardPlayback = true;
    let interpolateFromNumber;
    const animator = detectAnimationFromOptions(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
        interpolateFromNumber = interpolate([0, 100], [from, to], {
            clamp: false,
        });
        from = 0;
        to = 100;
    }
    const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
    function repeat() {
        repeatCount++;
        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        }
        else {
            elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror")
                animation.flipTarget();
        }
        isComplete = false;
        onRepeat && onRepeat();
    }
    function complete() {
        driverControls.stop();
        onComplete && onComplete();
    }
    function update(delta) {
        if (!isForwardPlayback)
            delta = -delta;
        elapsed += delta;
        if (!isComplete) {
            const state = animation.next(Math.max(0, elapsed));
            latest = state.value;
            if (interpolateFromNumber)
                latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? state.done : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
        if (isComplete) {
            if (repeatCount === 0)
                computedDuration !== null && computedDuration !== void 0 ? computedDuration : (computedDuration = elapsed);
            if (repeatCount < repeatMax) {
                hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            }
            else {
                complete();
            }
        }
    }
    function play() {
        onPlay === null || onPlay === void 0 ? void 0 : onPlay();
        driverControls = driver(update);
        driverControls.start();
    }
    autoplay && play();
    return {
        stop: () => {
            onStop === null || onStop === void 0 ? void 0 : onStop();
            driverControls.stop();
        },
    };
}

const a = (a1, a2) => 1.0 - 3.0 * a2 + 3.0 * a1;
const b = (a1, a2) => 3.0 * a2 - 6.0 * a1;
const c = (a1) => 3.0 * a1;
const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
const getSlope = (t, a1, a2) => 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
const newtonIterations = 8;
const newtonMinSlope = 0.001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (let i = 0; i < newtonIterations; ++i) {
        const currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
const kSplineTableSize = 11;
const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
function cubicBezier$1(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
        return linear;
    const sampleValues = new Float32Array(kSplineTableSize);
    for (let i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        let intervalStart = 0.0;
        let currentSample = 1;
        const lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        const dist = (aX - sampleValues[currentSample]) /
            (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        const guessForT = intervalStart + dist * kSampleStepSize;
        const initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= newtonMinSlope) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
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
  // SVG-related properties
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
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  var componentSelector = interpolation;

  if (componentSelector.__emotion_styles !== undefined) {

    return componentSelector;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        var keyframes = interpolation;

        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }

        var serializedStyles = interpolation;

        if (serializedStyles.styles !== undefined) {
          var next = serializedStyles.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = serializedStyles.styles + ";";
          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  var asString = interpolation;

  if (registered == null) {
    return asString;
  }

  var cached = registered[asString];
  return cached !== undefined ? cached : asString;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];

      if (typeof value !== 'object') {
        var asString = value;

        if (registered != null && registered[asString] !== undefined) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;

    styles += asTemplateStringsArr[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      var templateStringsArr = strings;

      styles += templateStringsArr[i];
    }
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
}

function createNameGetter() {
  return new Proxy(
    {},
    {
      get(_, p) {
        return p;
      }
    }
  );
}
const CSSProperty = createNameGetter();
const extensions = {
  paddingX: [CSSProperty.paddingLeft, CSSProperty.paddingRight],
  paddingY: [CSSProperty.paddingTop, CSSProperty.paddingBottom],
  marginX: [CSSProperty.marginInlineStart, CSSProperty.marginInlineEnd],
  marginY: [CSSProperty.marginTop, CSSProperty.marginBottom],
  borderX: [CSSProperty.borderLeft, CSSProperty.borderRight],
  borderY: [CSSProperty.borderTop, CSSProperty.borderBottom],
  color: [CSSProperty.color, CSSProperty.fill],
  borderTopRadius: [
    CSSProperty.borderTopLeftRadius,
    CSSProperty.borderTopRightRadius
  ],
  borderBottomRadius: [
    CSSProperty.borderBottomLeftRadius,
    CSSProperty.borderBottomRightRadius
  ],
  borderRightRadius: [
    CSSProperty.borderTopRightRadius,
    CSSProperty.borderBottomRightRadius
  ],
  borderLeftRadius: [
    CSSProperty.borderTopLeftRadius,
    CSSProperty.borderBottomLeftRadius
  ],
  backgroundGradient: [CSSProperty.backgroundImage],
  boxSize: [CSSProperty.width, CSSProperty.height]
};
const CSSExtendedProperty = createNameGetter();
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
const CSSAllProperty = createNameGetter();
const expandAliases = (...props) => {
  const final = [...props];
  for (const p of props) {
    if (aliases[p]) {
      final.push(aliases[p]);
    }
  }
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

class CSSProcessor {
  constructor(opt) {
    this.opt = opt;
  }
  static supportedPseudoClasses = getSupportedPseudoClasses();
  static convertSelector = (sel) => {
    if (pseudoSelectors[sel]) {
      return pseudoSelectors[sel];
    }
    let selector = sel;
    if (selector.startsWith("$") || selector.endsWith("$") || selector.startsWith("_")) {
      let prefix = "";
      let suffix = "";
      if (selector.startsWith("_")) {
        prefix = "&";
        selector = selector.slice(1);
      } else if (selector.startsWith("$")) {
        prefix = "& ";
        selector = selector.slice(1);
      } else {
        suffix = " &";
        selector = selector.slice(0, selector.length - 1);
      }
      if (selector.startsWith("data") || selector.startsWith("aria")) {
        const [k, v] = selector.split("__");
        return v ? `${prefix}[${kebabCase(k)}='${kebabCase(v)}']${suffix}` : `${prefix}[${kebabCase(k)}]${suffix}`;
      }
      if (prefix === "&") {
        if (selector.startsWith("$")) {
          return `${prefix}::${selector.slice(1)}`;
        }
        if (CSSProcessor.supportedPseudoClasses[selector]) {
          const pseudoClass = CSSProcessor.supportedPseudoClasses[selector];
          return [
            `${prefix}:${pseudoClass}`,
            `${prefix}[data-${pseudoClass}]:not([data-${pseudoClass}='false'])`,
            `${prefix}.${pseudoClass}`
            // fallback with class for overwrite
          ].join(", ");
        }
        const [k, v] = selector.split("__");
        const stateKey = kebabCase(k);
        return v ? `${prefix}[data-${stateKey}='${kebabCase(v)}']` : `${prefix}[data-${stateKey}]:not([data-${stateKey}='false'])`;
      }
    }
    return;
  };
  static walkStateValues = (values, cb, ctx = {
    default: {},
    selectorPath: [],
    path: []
  }) => {
    const { $, ...others } = values;
    for (const k in others) {
      const v = others[k];
      const finalDefault = others["default"] ?? ctx["default"];
      const selectorForCurrentNode = $ ?? get(finalDefault, [...ctx.path.slice(1), "$"]);
      const selectorPath = selectorForCurrentNode ? [...ctx.selectorPath, selectorForCurrentNode] : ctx.selectorPath;
      const path = [...ctx.path, k];
      if (isPlainObject(v)) {
        CSSProcessor.walkStateValues(v, cb, {
          path,
          selectorPath,
          default: finalDefault
        });
        continue;
      }
      cb(v, path, selectorPath);
    }
  };
  processAll(src, full = true) {
    const ret = [];
    const { state, extends: ex, ...others } = src;
    if (ex) {
      for (const sx of ex) {
        ret.push(...this.processAll(sx, full));
      }
    }
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
      ret.push(...this.processAll(finalSx));
    }
    if (!isEmpty(others)) {
      const sx = {};
      this.processTo(sx, others, full);
      ret.push(sx);
    }
    return ret;
  }
  processTo(dest, src, full = true) {
    for (const p in src) {
      this.process(dest, p, src[p], full);
    }
  }
  process(dest, prop, v, full = true) {
    if (this.opt.mixins[prop]) {
      const mixinObj = this.opt.mixins[prop]?.get(v);
      if (mixinObj) {
        for (const p2 in mixinObj) {
          this.process(dest, p2, mixinObj[p2], full);
        }
      }
      return;
    }
    let p = prop;
    if (isPlainObject(v)) {
      p = CSSProcessor.convertSelector(p) ?? p;
      dest[p] = dest[p] ?? {};
      this.processTo(dest[p], v);
      return;
    }
    if (full) {
      p = aliases[p] ?? p;
      if (extensions[p]) {
        for (const p2 of extensions[p]) {
          dest[p2] = this.opt.processValue(p2, v);
        }
        return;
      }
    }
    dest[p] = this.opt.processValue(p, v);
  }
}

var DesignTokenType = /* @__PURE__ */ ((DesignTokenType2) => {
  DesignTokenType2["var"] = "var";
  DesignTokenType2["mixin"] = "mixin";
  return DesignTokenType2;
})(DesignTokenType || {});
class DesignToken {
  static create(type, {
    value,
    on,
    transform
  }) {
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
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(
        CSSAllProperty.color,
        CSSAllProperty.bgColor,
        CSSAllProperty.outlineColor,
        CSSAllProperty.borderColor,
        CSSAllProperty.accentColor,
        CSSAllProperty.fill,
        CSSAllProperty.stroke
      ),
      transform: (rgb, cssVar) => {
        return isString$1(rgb) ? {
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
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(
        CSSAllProperty.gap,
        CSSAllProperty.rowGap,
        CSSAllProperty.columnGap,
        CSSAllProperty.top,
        CSSAllProperty.right,
        CSSAllProperty.bottom,
        CSSAllProperty.left,
        CSSAllProperty.m,
        CSSAllProperty.ms,
        CSSAllProperty.me,
        CSSAllProperty.mt,
        CSSAllProperty.mr,
        CSSAllProperty.mb,
        CSSAllProperty.ml,
        CSSAllProperty.mx,
        CSSAllProperty.my,
        CSSAllProperty.p,
        CSSAllProperty.ps,
        CSSAllProperty.pe,
        CSSAllProperty.pt,
        CSSAllProperty.pr,
        CSSAllProperty.pb,
        CSSAllProperty.pl,
        CSSAllProperty.px,
        CSSAllProperty.py
      )
    });
  }
  static boxSize(value) {
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(
        CSSAllProperty.w,
        CSSAllProperty.minW,
        CSSAllProperty.maxW,
        CSSAllProperty.h,
        CSSAllProperty.minH,
        CSSAllProperty.maxH,
        CSSAllProperty.boxSize
      ),
      fallback: 0
    });
  }
  static fontSize(value) {
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(CSSAllProperty.fontSize),
      fallback: 0
    });
  }
  static lineHeight(value) {
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(CSSAllProperty.lineHeight),
      fallback: 0
    });
  }
  static rounded(value) {
    return DesignToken.create("var" /* var */, {
      value,
      fallback: 0,
      on: expandAliases(
        CSSAllProperty.rounded,
        CSSAllProperty.roundedTop,
        CSSAllProperty.roundedBottom,
        CSSAllProperty.roundedLeft,
        CSSAllProperty.roundedRight,
        CSSProperty.borderTopLeftRadius,
        CSSProperty.borderTopRightRadius,
        CSSProperty.borderBottomLeftRadius,
        CSSProperty.borderBottomRightRadius,
        CSSProperty.borderTopRightRadius,
        CSSProperty.borderBottomRightRadius,
        CSSProperty.borderTopLeftRadius,
        CSSProperty.borderBottomLeftRadius
      )
    });
  }
  static transitionTimingFunction(value) {
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(CSSAllProperty.transitionTimingFunction)
    });
  }
  static transitionDuration(value) {
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(CSSAllProperty.transitionDuration),
      transform: (v) => `${v}ms`
    });
  }
  static font(value) {
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(CSSAllProperty.font)
    });
  }
  static fontWeight(value) {
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(CSSAllProperty.fontWeight)
    });
  }
  static letterSpacing(value) {
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(CSSAllProperty.letterSpacing)
    });
  }
  static shadow(value) {
    return DesignToken.create("var" /* var */, {
      value,
      on: expandAliases(CSSAllProperty.shadow)
    });
  }
  static customMixin(customProp, value) {
    return DesignToken.create("mixin" /* mixin */, {
      value,
      on: [customProp]
    });
  }
  static mixin(sx) {
    return { ...sx, __mixin: true };
  }
}

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

class TokenSet {
  static defaultMode = "_default";
  static walkValues = (o, cb, parent = []) => {
    for (const k in o) {
      const v = o[k];
      if (isMap(v)) {
        if (has(v, "_default")) {
          cb(v, [...parent, k]);
          continue;
        }
        TokenSet.walkValues(v, cb, [...parent, k]);
        continue;
      }
      cb(v, [...parent, k]);
    }
  };
  __Tokens = void 0;
  _values = {};
  _cssVarRefs = {};
  constructor(dt, {
    cssVar,
    transformFallback
  }) {
    TokenSet.walkValues(dt.value, (v, p) => {
      const token = p.join(".");
      const forEachTransformed = (v2, each) => {
        const ret = dt.transform ? dt.transform(v2, cssVar) : transformFallback(v2);
        if (isObject(ret)) {
          for (const i in ret) {
            each(ret[i], i === "default" ? "" : i);
          }
        } else {
          each(ret, "");
        }
      };
      set(this._cssVarRefs, [token], cssVar(token));
      if (isMap(v)) {
        for (const k in v) {
          forEachTransformed(v[k], (value, variant) => {
            set(
              this._values,
              [`${token}${variant ? `/${variant}` : ""}`, k],
              value
            );
          });
        }
      } else {
        forEachTransformed(v, (value, variant) => {
          set(this._values, [`${token}${variant ? `/${variant}` : ""}`], value);
        });
      }
    });
  }
  get tokens() {
    return keys(this._values);
  }
  get(token, modePseudo, strict) {
    const v = this._values[token];
    if (isObject(v)) {
      if (strict) {
        return v[modePseudo];
      }
      return v[modePseudo] ?? v[TokenSet.defaultMode];
    }
    if (strict) {
      if (modePseudo === TokenSet.defaultMode) {
        return v;
      }
      return void 0;
    }
    return v;
  }
  use(token, variableOnly = false) {
    if (this._cssVarRefs[token]) {
      if (variableOnly) {
        return `${this._cssVarRefs[token]}`;
      }
      return `var(${this._cssVarRefs[token]})`;
    }
    return;
  }
}

class Mixin {
  static walkValue = (o, cb, parent = []) => {
    for (const k in o) {
      const v = o[k];
      if (isMap(v)) {
        if (has(v, "__mixin")) {
          cb(v, [...parent, k]);
          continue;
        }
        Mixin.walkValue(v, cb, [...parent, k]);
        continue;
      }
      cb(v, [...parent, k]);
    }
  };
  _values = {};
  constructor(dt) {
    Mixin.walkValue(dt.value, (v, p) => {
      const token = p.join(".");
      set(this._values, [token], omit(v, "__mixin"));
    });
  }
  get tokens() {
    return keys(this._values);
  }
  get(token) {
    return this._values[token];
  }
}

const groups = {
  primary: ["primary"],
  secondary: ["secondary"],
  tertiary: ["tertiary"],
  error: ["error"],
  warning: ["warning"],
  success: ["success"],
  neutral: ["surface", "outline"]
};
const groupSysColors = (figmaTokensValues) => {
  const sysColors = get(figmaTokensValues, ["color", "sys"], {});
  return {
    ...figmaTokensValues,
    color: {
      sys: mapValues(groups, (matches) => {
        return pickBy(
          sysColors,
          (_, token) => some(matches, (m) => token.indexOf(m) > -1)
        );
      })
    }
  };
};

const alpha = (a) => {
  return (cssVar) => `rgba(var(${cssVar}--rgb) / ${a})`;
};
const isVariant = (fn) => {
  return isFunction(fn) && has(fn, "token");
};
function variant(token, toVariant) {
  return Object.assign(
    (cssVar) => {
      return toVariant(cssVar);
    },
    {
      toString: () => token,
      token
    }
  );
}

const toMap = (list) => list.reduce((ret, v) => {
  return Object.assign(ret, {
    [v]: true
  });
}, {});
class Theming {
  constructor(theme, options = {}) {
    this.theme = theme;
    this.varPrefix = options.varPrefix ?? "vk";
    this.mode = options.mode ?? "light";
    set(this.cssVars, [this.cssVar("space", "dp")], "0.1rem");
    for (const scale in theme) {
      const dt = theme[scale];
      if (!dt) {
        continue;
      }
      if (dt.type === DesignTokenType.var) {
        const dtv = new TokenSet(dt, {
          cssVar: (token) => this.cssVar(scale, token),
          transformFallback: (v) => this.transformFallback(dt.on[0], v)
        });
        this.tokens[scale] = dtv;
        for (const prop of dt.on) {
          this.propValues[prop] = dtv;
        }
        for (const token of dtv.tokens) {
          for (const mode of ["light", "dark"]) {
            const modePseudo = mode === this.mode ? "_default" : `_${mode}`;
            const v = dtv.get(token, modePseudo, true);
            if (!isUndefined(v)) {
              if (modePseudo === "_default") {
                set(this.cssVars, [this.cssVar(scale, token)], v);
              } else {
                set(this.cssVars, [modePseudo, this.cssVar(scale, token)], v);
              }
            }
          }
        }
        continue;
      }
      if (dt.type === DesignTokenType.mixin) {
        const m = new Mixin(dt);
        for (const prop of dt.on) {
          this.mixins[prop] = m;
        }
      }
    }
  }
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
  transformFallback = (p, v) => {
    if (Theming.propsCanBaseDp[p] && isNumber(v)) {
      if (Theming.propsCanPercent[p] && Math.abs(v) < 1) {
        return `${v * 100}%`;
      }
      return this.dp(v);
    }
    return v;
  };
  cssVar(scale, key) {
    return `--${this.varPrefix}-${kebabCase(scale)}__${key.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  token = new Proxy(
    {},
    {
      get: (_, prop) => {
        if (this.tokens[prop]) {
          return Object.assign(
            (token) => this.tokens[prop]?.get(token, `_${this.mode}`),
            {
              tokens: this.tokens[prop]?.tokens
            }
          );
        }
        if (this.mixins[prop]) {
          return Object.assign(
            (token) => this.mixins[prop]?.get(token),
            {
              tokens: this.mixins[prop]?.tokens
            }
          );
        }
        return;
      }
    }
  );
  processValue = (p, v) => {
    if (isVariant(v)) {
      const cssVar = this.propValues[p]?.use(v.token, true);
      return cssVar ? v(cssVar) : void 0;
    }
    return this.propValues[p]?.use(v) ?? this.transformFallback(p, v);
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
    inputs.__emotion_styles = inputs.__emotion_styles ?? serializeStyles(this.unstable_sx(sx), cache?.registered, {});
    return inputs.__emotion_styles;
  }
  toFigmaTokens() {
    const seedTokens = {
      space: {
        dp: {
          $type: "sizing",
          $value: 1
        }
      }
    };
    const baseTokens = {};
    const darkTokens = {};
    const toFigmaToken = (type, value) => {
      if (isObject(value)) {
        return {
          $type: type,
          $value: mapValues(value, (v) => {
            return toFigmaToken(type, v).$value;
          })
        };
      }
      if (isString$1(value)) {
        return {
          $type: type,
          $value: value.replace(/var\(([^)]+)\)/g, (v) => {
            const k = v.slice("var(".length, v.length - 1);
            const parts = k.slice(`--${this.varPrefix}-`.length).split("--");
            const keyPath = parts[0]?.split("__").map((p, i) => i === 0 ? camelCase(p) : p).join(".") ?? "";
            if (!keyPath.startsWith("sys.")) {
              return `{seed.${keyPath}}`;
            }
            return `{${keyPath}}`;
          }).replace(
            /calc\(.+\)$/g,
            (v) => v.slice("calc(".length, v.length - 1)
          )
        };
      }
      return {
        $type: type,
        $value: value
      };
    };
    for (const topic in this.tokens) {
      const ts = this.tokens[topic];
      const collect = (type) => {
        for (const t of ts.tokens) {
          if (t.includes("/")) {
            continue;
          }
          if (t.startsWith("sys.")) {
            const defaultValue = ts.get(t, "_default");
            const darkValue = ts.get(t, "_dark");
            setTo(
              baseTokens,
              [topic, ...t.split(".")],
              toFigmaToken(type, defaultValue)
            );
            if (defaultValue !== darkValue) {
              setTo(
                darkTokens,
                [topic, ...t.split(".")],
                toFigmaToken(type, darkValue)
              );
            }
          } else {
            setTo(
              seedTokens,
              [topic, ...t.split(".")],
              toFigmaToken(type, ts.get(t, "_default"))
            );
          }
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
      if (!mixin) {
        continue;
      }
      const collect = (type) => {
        for (const t of mixin.tokens) {
          const v = mixin.get(t);
          if (!v) {
            continue;
          }
          const value = this.unstable_sx(v)[0];
          setTo(
            baseTokens,
            [topic, ...t.split(".")],
            toFigmaToken(type, value)
          );
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
      base: groupSysColors(baseTokens),
      dark: groupSysColors(darkTokens)
    };
  }
}

const elevation = {
  shadow: DesignToken.shadow({
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
  elevation: DesignToken.customMixin("elevation", {
    "0": DesignToken.mixin({
      transitionDuration: "md4",
      transitionTimingFunction: "standard",
      shadow: "0",
      _hover: {
        shadow: "1"
      }
    }),
    "1": DesignToken.mixin({
      transitionDuration: "md4",
      transitionTimingFunction: "standard",
      shadow: "1",
      _hover: {
        shadow: "2"
      }
    }),
    "2": DesignToken.mixin({
      transitionDuration: "md4",
      transitionTimingFunction: "standard",
      shadow: "2",
      _hover: {
        shadow: "3"
      }
    }),
    "3": DesignToken.mixin({
      transitionDuration: "md4",
      transitionTimingFunction: "standard",
      shadow: "3",
      _hover: {
        shadow: "4"
      }
    }),
    "4": DesignToken.mixin({
      transitionDuration: "md4",
      transitionTimingFunction: "standard",
      shadow: "4",
      _hover: {
        shadow: "5"
      }
    })
  })
};

const cubicBezier = (mX1, mY1, mX2, mY2) => {
  return Object.assign(cubicBezier$1(mX1, mY1, mX2, mY2), {
    toString() {
      return `cubic-bezier(${mX1}, ${mY1}, ${mX2}, ${mY2})`;
    }
  });
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
    linear: cubicBezier(0, 0, 1, 1),
    standard: Object.assign(cubicBezier(0.2, 0, 0, 1), {
      accelerate: cubicBezier(0.3, 0, 1, 1),
      decelerate: cubicBezier(0, 0, 0, 1)
    }),
    emphasized: Object.assign(cubicBezier(0.2, 0, 0, 1), {
      accelerate: cubicBezier(0.3, 0, 0.8, 0.15),
      decelerate: cubicBezier(0.05, 0.7, 0.1, 1)
    }),
    legacy: Object.assign(cubicBezier(0.4, 0, 0.2, 1), {
      decelerate: cubicBezier(0, 0, 0.2, 1),
      accelerate: cubicBezier(0.4, 0, 1, 1)
    })
  }
};
const defineTransition = (enter, leave) => {
  const finalLeave = leave ?? {
    ...enter,
    from: {
      ...enter.to
    },
    to: {
      ...enter.from
    }
  };
  return component({
    onComplete: custom(),
    $default: custom()
  }, (_, { slots, emit }) => {
    let animated;
    const onEnter = (e, done) => {
      animated = animate({
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
      animated = animate({
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
      return /* @__PURE__ */ jsx(Transition, { css: false, onEnter, onEnterCancelled: onCancelled, onLeave, onLeaveCancelled: onCancelled, children: slots.default?.() });
    };
  }, {
    name: "Transition"
  });
};

const motion = {
  transitionDuration: DesignToken.transitionDuration(transition.duration),
  transitionTimingFunction: DesignToken.transitionTimingFunction({
    linear: transition.easing.linear.toString(),
    standard: transition.easing.standard.toString(),
    "standard-accelerate": transition.easing.standard.accelerate.toString(),
    "standard-decelerate": transition.easing.standard.decelerate.toString(),
    emphasized: transition.easing.emphasized.toString(),
    "emphasized-decelerate": transition.easing.emphasized.decelerate.toString(),
    "emphasized-accelerate": transition.easing.emphasized.accelerate.toString(),
    legacy: transition.easing.legacy.toString(),
    "legacy-decelerate": transition.easing.legacy.decelerate.toString(),
    "legacy-accelerate": transition.easing.legacy.accelerate.toString()
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
 */
// This file is automatically generated. Do not modify it.
/**
 * Utility methods for mathematical operations.
 */
/**
 * The signum function.
 *
 * @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
 */
function signum(num) {
    if (num < 0) {
        return -1;
    }
    else if (num === 0) {
        return 0;
    }
    else {
        return 1;
    }
}
/**
 * The linear interpolation function.
 *
 * @return start if amount = 0 and stop if amount = 1
 */
function lerp(start, stop, amount) {
    return (1.0 - amount) * start + amount * stop;
}
/**
 * Clamps an integer between two integers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampInt(min, max, input) {
    if (input < min) {
        return min;
    }
    else if (input > max) {
        return max;
    }
    return input;
}
/**
 * Clamps an integer between two floating-point numbers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampDouble(min, max, input) {
    if (input < min) {
        return min;
    }
    else if (input > max) {
        return max;
    }
    return input;
}
/**
 * Sanitizes a degree measure as a floating-point number.
 *
 * @return a degree measure between 0.0 (inclusive) and 360.0
 * (exclusive).
 */
function sanitizeDegreesDouble(degrees) {
    degrees = degrees % 360.0;
    if (degrees < 0) {
        degrees = degrees + 360.0;
    }
    return degrees;
}
/**
 * Multiplies a 1x3 row vector with a 3x3 matrix.
 */
function matrixMultiply(row, matrix) {
    const a = row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2];
    const b = row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2];
    const c = row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2];
    return [a, b, c];
}

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
 */
// This file is automatically generated. Do not modify it.
/**
 * Color science utilities.
 *
 * Utility methods for color science constants and color space
 * conversions that aren't HCT or CAM16.
 */
const SRGB_TO_XYZ = [
    [0.41233895, 0.35762064, 0.18051042],
    [0.2126, 0.7152, 0.0722],
    [0.01932141, 0.11916382, 0.95034478],
];
const XYZ_TO_SRGB = [
    [
        3.2413774792388685,
        -1.5376652402851851,
        -0.49885366846268053,
    ],
    [
        -0.9691452513005321,
        1.8758853451067872,
        0.04156585616912061,
    ],
    [
        0.05562093689691305,
        -0.20395524564742123,
        1.0571799111220335,
    ],
];
const WHITE_POINT_D65 = [95.047, 100.0, 108.883];
/**
 * Converts a color from RGB components to ARGB format.
 */
function argbFromRgb(red, green, blue) {
    return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>>
        0;
}
/**
 * Converts a color from linear RGB components to ARGB format.
 */
function argbFromLinrgb(linrgb) {
    const r = delinearized(linrgb[0]);
    const g = delinearized(linrgb[1]);
    const b = delinearized(linrgb[2]);
    return argbFromRgb(r, g, b);
}
/**
 * Returns the alpha component of a color in ARGB format.
 */
function alphaFromArgb(argb) {
    return argb >> 24 & 255;
}
/**
 * Returns the red component of a color in ARGB format.
 */
function redFromArgb(argb) {
    return argb >> 16 & 255;
}
/**
 * Returns the green component of a color in ARGB format.
 */
function greenFromArgb(argb) {
    return argb >> 8 & 255;
}
/**
 * Returns the blue component of a color in ARGB format.
 */
function blueFromArgb(argb) {
    return argb & 255;
}
/**
 * Converts a color from ARGB to XYZ.
 */
function argbFromXyz(x, y, z) {
    const matrix = XYZ_TO_SRGB;
    const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
    const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
    const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
    const r = delinearized(linearR);
    const g = delinearized(linearG);
    const b = delinearized(linearB);
    return argbFromRgb(r, g, b);
}
/**
 * Converts a color from XYZ to ARGB.
 */
function xyzFromArgb(argb) {
    const r = linearized(redFromArgb(argb));
    const g = linearized(greenFromArgb(argb));
    const b = linearized(blueFromArgb(argb));
    return matrixMultiply([r, g, b], SRGB_TO_XYZ);
}
/**
 * Converts an L* value to an ARGB representation.
 *
 * @param lstar L* in L*a*b*
 * @return ARGB representation of grayscale color with lightness
 * matching L*
 */
function argbFromLstar(lstar) {
    const y = yFromLstar(lstar);
    const component = delinearized(y);
    return argbFromRgb(component, component, component);
}
/**
 * Computes the L* value of a color in ARGB representation.
 *
 * @param argb ARGB representation of a color
 * @return L*, from L*a*b*, coordinate of the color
 */
function lstarFromArgb(argb) {
    const y = xyzFromArgb(argb)[1];
    return 116.0 * labF(y / 100.0) - 16.0;
}
/**
 * Converts an L* value to a Y value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param lstar L* in L*a*b*
 * @return Y in XYZ
 */
function yFromLstar(lstar) {
    return 100.0 * labInvf((lstar + 16.0) / 116.0);
}
/**
 * Converts a Y value to an L* value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param y Y in XYZ
 * @return L* in L*a*b*
 */
function lstarFromY(y) {
    return labF(y / 100.0) * 116.0 - 16.0;
}
/**
 * Linearizes an RGB component.
 *
 * @param rgbComponent 0 <= rgb_component <= 255, represents R/G/B
 * channel
 * @return 0.0 <= output <= 100.0, color channel converted to
 * linear RGB space
 */
function linearized(rgbComponent) {
    const normalized = rgbComponent / 255.0;
    if (normalized <= 0.040449936) {
        return normalized / 12.92 * 100.0;
    }
    else {
        return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100.0;
    }
}
/**
 * Delinearizes an RGB component.
 *
 * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
 * linear R/G/B channel
 * @return 0 <= output <= 255, color channel converted to regular
 * RGB space
 */
function delinearized(rgbComponent) {
    const normalized = rgbComponent / 100.0;
    let delinearized = 0.0;
    if (normalized <= 0.0031308) {
        delinearized = normalized * 12.92;
    }
    else {
        delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
    }
    return clampInt(0, 255, Math.round(delinearized * 255.0));
}
/**
 * Returns the standard white point; white on a sunny day.
 *
 * @return The white point
 */
function whitePointD65() {
    return WHITE_POINT_D65;
}
/**
 * Return RGBA from a given int32 color
 *
 * @param argb ARGB representation of a int32 color.
 * @return RGBA representation of a int32 color.
 */
function rgbaFromArgb(argb) {
    const r = redFromArgb(argb);
    const g = greenFromArgb(argb);
    const b = blueFromArgb(argb);
    const a = alphaFromArgb(argb);
    return { r, g, b, a };
}
function labF(t) {
    const e = 216.0 / 24389.0;
    const kappa = 24389.0 / 27.0;
    if (t > e) {
        return Math.pow(t, 1.0 / 3.0);
    }
    else {
        return (kappa * t + 16) / 116;
    }
}
function labInvf(ft) {
    const e = 216.0 / 24389.0;
    const kappa = 24389.0 / 27.0;
    const ft3 = ft * ft * ft;
    if (ft3 > e) {
        return ft3;
    }
    else {
        return (116 * ft - 16) / kappa;
    }
}

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
 */
/**
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 *
 * This class caches intermediate values of the CAM16 conversion process that
 * depend only on viewing conditions, enabling speed ups.
 */
class ViewingConditions {
    /**
     * Create ViewingConditions from a simple, physically relevant, set of
     * parameters.
     *
     * @param whitePoint White point, measured in the XYZ color space.
     *     default = D65, or sunny day afternoon
     * @param adaptingLuminance The luminance of the adapting field. Informally,
     *     how bright it is in the room where the color is viewed. Can be
     *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
     *     or 200 lux.
     * @param backgroundLstar The lightness of the area surrounding the color.
     *     measured by L* in L*a*b*. default = 50.0
     * @param surround A general description of the lighting surrounding the
     *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
     *     dimly light room, like watching TV at home at night. 2.0 means there
     *     is no difference between the lighting on the color and around it.
     *     default = 2.0
     * @param discountingIlluminant Whether the eye accounts for the tint of the
     *     ambient lighting, such as knowing an apple is still red in green light.
     *     default = false, the eye does not perform this process on
     *       self-luminous objects like displays.
     */
    static make(whitePoint = whitePointD65(), adaptingLuminance = (200.0 / Math.PI) * yFromLstar(50.0) / 100.0, backgroundLstar = 50.0, surround = 2.0, discountingIlluminant = false) {
        const xyz = whitePoint;
        const rW = xyz[0] * 0.401288 + xyz[1] * 0.650173 + xyz[2] * -0.051461;
        const gW = xyz[0] * -0.250268 + xyz[1] * 1.204414 + xyz[2] * 0.045854;
        const bW = xyz[0] * -2079e-6 + xyz[1] * 0.048952 + xyz[2] * 0.953127;
        const f = 0.8 + surround / 10.0;
        const c = f >= 0.9 ? lerp(0.59, 0.69, (f - 0.9) * 10.0) :
            lerp(0.525, 0.59, (f - 0.8) * 10.0);
        let d = discountingIlluminant ?
            1.0 :
            f * (1.0 - (1.0 / 3.6) * Math.exp((-adaptingLuminance - 42.0) / 92.0));
        d = d > 1.0 ? 1.0 : d < 0.0 ? 0.0 : d;
        const nc = f;
        const rgbD = [
            d * (100.0 / rW) + 1.0 - d,
            d * (100.0 / gW) + 1.0 - d,
            d * (100.0 / bW) + 1.0 - d,
        ];
        const k = 1.0 / (5.0 * adaptingLuminance + 1.0);
        const k4 = k * k * k * k;
        const k4F = 1.0 - k4;
        const fl = k4 * adaptingLuminance +
            0.1 * k4F * k4F * Math.cbrt(5.0 * adaptingLuminance);
        const n = yFromLstar(backgroundLstar) / whitePoint[1];
        const z = 1.48 + Math.sqrt(n);
        const nbb = 0.725 / Math.pow(n, 0.2);
        const ncb = nbb;
        const rgbAFactors = [
            Math.pow((fl * rgbD[0] * rW) / 100.0, 0.42),
            Math.pow((fl * rgbD[1] * gW) / 100.0, 0.42),
            Math.pow((fl * rgbD[2] * bW) / 100.0, 0.42),
        ];
        const rgbA = [
            (400.0 * rgbAFactors[0]) / (rgbAFactors[0] + 27.13),
            (400.0 * rgbAFactors[1]) / (rgbAFactors[1] + 27.13),
            (400.0 * rgbAFactors[2]) / (rgbAFactors[2] + 27.13),
        ];
        const aw = (2.0 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb;
        return new ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, Math.pow(fl, 0.25), z);
    }
    /**
     * Parameters are intermediate values of the CAM16 conversion process. Their
     * names are shorthand for technical color science terminology, this class
     * would not benefit from documenting them individually. A brief overview
     * is available in the CAM16 specification, and a complete overview requires
     * a color science textbook, such as Fairchild's Color Appearance Models.
     */
    constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
        this.n = n;
        this.aw = aw;
        this.nbb = nbb;
        this.ncb = ncb;
        this.c = c;
        this.nc = nc;
        this.rgbD = rgbD;
        this.fl = fl;
        this.fLRoot = fLRoot;
        this.z = z;
    }
}
/** sRGB-like viewing conditions.  */
ViewingConditions.DEFAULT = ViewingConditions.make();

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
 */
/**
 * CAM16, a color appearance model. Colors are not just defined by their hex
 * code, but rather, a hex code and viewing conditions.
 *
 * CAM16 instances also have coordinates in the CAM16-UCS space, called J*, a*,
 * b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
 * specification, and should be used when measuring distances between colors.
 *
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 */
class Cam16 {
    /**
     * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
     * the following combinations:
     *      -  {j or q} and {c, m, or s} and hue
     *      - jstar, astar, bstar
     * Prefer using a static method that constructs from 3 of those dimensions.
     * This constructor is intended for those methods to use to return all
     * possible dimensions.
     *
     * @param hue
     * @param chroma informally, colorfulness / color intensity. like saturation
     *     in HSL, except perceptually accurate.
     * @param j lightness
     * @param q brightness; ratio of lightness to white point's lightness
     * @param m colorfulness
     * @param s saturation; ratio of chroma to white point's chroma
     * @param jstar CAM16-UCS J coordinate
     * @param astar CAM16-UCS a coordinate
     * @param bstar CAM16-UCS b coordinate
     */
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
    /**
     * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
     * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
     * specification, and is used to measure distances between colors.
     */
    distance(other) {
        const dJ = this.jstar - other.jstar;
        const dA = this.astar - other.astar;
        const dB = this.bstar - other.bstar;
        const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
        const dE = 1.41 * Math.pow(dEPrime, 0.63);
        return dE;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return CAM16 color, assuming the color was viewed in default viewing
     *     conditions.
     */
    static fromInt(argb) {
        return Cam16.fromIntInViewingConditions(argb, ViewingConditions.DEFAULT);
    }
    /**
     * @param argb ARGB representation of a color.
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     * @return CAM16 color.
     */
    static fromIntInViewingConditions(argb, viewingConditions) {
        const red = (argb & 0x00ff0000) >> 16;
        const green = (argb & 0x0000ff00) >> 8;
        const blue = (argb & 0x000000ff);
        const redL = linearized(red);
        const greenL = linearized(green);
        const blueL = linearized(blue);
        const x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
        const y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
        const z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
        const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
        const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
        const bC = -2079e-6 * x + 0.048952 * y + 0.953127 * z;
        const rD = viewingConditions.rgbD[0] * rC;
        const gD = viewingConditions.rgbD[1] * gC;
        const bD = viewingConditions.rgbD[2] * bC;
        const rAF = Math.pow((viewingConditions.fl * Math.abs(rD)) / 100.0, 0.42);
        const gAF = Math.pow((viewingConditions.fl * Math.abs(gD)) / 100.0, 0.42);
        const bAF = Math.pow((viewingConditions.fl * Math.abs(bD)) / 100.0, 0.42);
        const rA = (signum(rD) * 400.0 * rAF) / (rAF + 27.13);
        const gA = (signum(gD) * 400.0 * gAF) / (gAF + 27.13);
        const bA = (signum(bD) * 400.0 * bAF) / (bAF + 27.13);
        const a = (11.0 * rA + -12 * gA + bA) / 11.0;
        const b = (rA + gA - 2.0 * bA) / 9.0;
        const u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
        const p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
        const atan2 = Math.atan2(b, a);
        const atanDegrees = (atan2 * 180.0) / Math.PI;
        const hue = atanDegrees < 0 ? atanDegrees + 360.0 :
            atanDegrees >= 360 ? atanDegrees - 360.0 :
                atanDegrees;
        const hueRadians = (hue * Math.PI) / 180.0;
        const ac = p2 * viewingConditions.nbb;
        const j = 100.0 *
            Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
        const q = (4.0 / viewingConditions.c) * Math.sqrt(j / 100.0) *
            (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
        const huePrime = hue < 20.14 ? hue + 360 : hue;
        const eHue = 0.25 * (Math.cos((huePrime * Math.PI) / 180.0 + 2.0) + 3.8);
        const p1 = (50000.0 / 13.0) * eHue * viewingConditions.nc * viewingConditions.ncb;
        const t = (p1 * Math.sqrt(a * a + b * b)) / (u + 0.305);
        const alpha = Math.pow(t, 0.9) *
            Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const c = alpha * Math.sqrt(j / 100.0);
        const m = c * viewingConditions.fLRoot;
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        const jstar = ((1.0 + 100.0 * 0.007) * j) / (1.0 + 0.007 * j);
        const mstar = (1.0 / 0.0228) * Math.log(1.0 + 0.0228 * m);
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(hue, c, j, q, m, s, jstar, astar, bstar);
    }
    /**
     * @param j CAM16 lightness
     * @param c CAM16 chroma
     * @param h CAM16 hue
     */
    static fromJch(j, c, h) {
        return Cam16.fromJchInViewingConditions(j, c, h, ViewingConditions.DEFAULT);
    }
    /**
     * @param j CAM16 lightness
     * @param c CAM16 chroma
     * @param h CAM16 hue
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     */
    static fromJchInViewingConditions(j, c, h, viewingConditions) {
        const q = (4.0 / viewingConditions.c) * Math.sqrt(j / 100.0) *
            (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
        const m = c * viewingConditions.fLRoot;
        const alpha = c / Math.sqrt(j / 100.0);
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        const hueRadians = (h * Math.PI) / 180.0;
        const jstar = ((1.0 + 100.0 * 0.007) * j) / (1.0 + 0.007 * j);
        const mstar = (1.0 / 0.0228) * Math.log(1.0 + 0.0228 * m);
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(h, c, j, q, m, s, jstar, astar, bstar);
    }
    /**
     * @param jstar CAM16-UCS lightness.
     * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the Y axis.
     * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the X axis.
     */
    static fromUcs(jstar, astar, bstar) {
        return Cam16.fromUcsInViewingConditions(jstar, astar, bstar, ViewingConditions.DEFAULT);
    }
    /**
     * @param jstar CAM16-UCS lightness.
     * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the Y axis.
     * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the X axis.
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     */
    static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
        const a = astar;
        const b = bstar;
        const m = Math.sqrt(a * a + b * b);
        const M = (Math.exp(m * 0.0228) - 1.0) / 0.0228;
        const c = M / viewingConditions.fLRoot;
        let h = Math.atan2(b, a) * (180.0 / Math.PI);
        if (h < 0.0) {
            h += 360.0;
        }
        const j = jstar / (1 - (jstar - 100) * 0.007);
        return Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
    }
    /**
     *  @return ARGB representation of color, assuming the color was viewed in
     *     default viewing conditions, which are near-identical to the default
     *     viewing conditions for sRGB.
     */
    toInt() {
        return this.viewed(ViewingConditions.DEFAULT);
    }
    /**
     * @param viewingConditions Information about the environment where the color
     *     will be viewed.
     * @return ARGB representation of color
     */
    viewed(viewingConditions) {
        const alpha = this.chroma === 0.0 || this.j === 0.0 ?
            0.0 :
            this.chroma / Math.sqrt(this.j / 100.0);
        const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1.0 / 0.9);
        const hRad = (this.hue * Math.PI) / 180.0;
        const eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8);
        const ac = viewingConditions.aw *
            Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const p2 = ac / viewingConditions.nbb;
        const hSin = Math.sin(hRad);
        const hCos = Math.cos(hRad);
        const gamma = (23.0 * (p2 + 0.305) * t) /
            (23.0 * p1 + 11.0 * t * hCos + 108.0 * t * hSin);
        const a = gamma * hCos;
        const b = gamma * hSin;
        const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
        const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
        const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
        const rCBase = Math.max(0, (27.13 * Math.abs(rA)) / (400.0 - Math.abs(rA)));
        const rC = signum(rA) * (100.0 / viewingConditions.fl) *
            Math.pow(rCBase, 1.0 / 0.42);
        const gCBase = Math.max(0, (27.13 * Math.abs(gA)) / (400.0 - Math.abs(gA)));
        const gC = signum(gA) * (100.0 / viewingConditions.fl) *
            Math.pow(gCBase, 1.0 / 0.42);
        const bCBase = Math.max(0, (27.13 * Math.abs(bA)) / (400.0 - Math.abs(bA)));
        const bC = signum(bA) * (100.0 / viewingConditions.fl) *
            Math.pow(bCBase, 1.0 / 0.42);
        const rF = rC / viewingConditions.rgbD[0];
        const gF = gC / viewingConditions.rgbD[1];
        const bF = bC / viewingConditions.rgbD[2];
        const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
        const y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
        const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
        const argb = argbFromXyz(x, y, z);
        return argb;
    }
    /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
    /// CAM16.
    static fromXyzInViewingConditions(x, y, z, viewingConditions) {
        // Transform XYZ to 'cone'/'rgb' responses
        const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
        const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
        const bC = -2079e-6 * x + 0.048952 * y + 0.953127 * z;
        // Discount illuminant
        const rD = viewingConditions.rgbD[0] * rC;
        const gD = viewingConditions.rgbD[1] * gC;
        const bD = viewingConditions.rgbD[2] * bC;
        // chromatic adaptation
        const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100.0, 0.42);
        const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100.0, 0.42);
        const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100.0, 0.42);
        const rA = signum(rD) * 400.0 * rAF / (rAF + 27.13);
        const gA = signum(gD) * 400.0 * gAF / (gAF + 27.13);
        const bA = signum(bD) * 400.0 * bAF / (bAF + 27.13);
        // redness-greenness
        const a = (11.0 * rA + -12 * gA + bA) / 11.0;
        // yellowness-blueness
        const b = (rA + gA - 2.0 * bA) / 9.0;
        // auxiliary components
        const u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
        const p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
        // hue
        const atan2 = Math.atan2(b, a);
        const atanDegrees = atan2 * 180.0 / Math.PI;
        const hue = atanDegrees < 0 ? atanDegrees + 360.0 :
            atanDegrees >= 360 ? atanDegrees - 360 :
                atanDegrees;
        const hueRadians = hue * Math.PI / 180.0;
        // achromatic response to color
        const ac = p2 * viewingConditions.nbb;
        // CAM16 lightness and brightness
        const J = 100.0 *
            Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
        const Q = (4.0 / viewingConditions.c) * Math.sqrt(J / 100.0) *
            (viewingConditions.aw + 4.0) * (viewingConditions.fLRoot);
        const huePrime = (hue < 20.14) ? hue + 360 : hue;
        const eHue = (1.0 / 4.0) * (Math.cos(huePrime * Math.PI / 180.0 + 2.0) + 3.8);
        const p1 = 50000.0 / 13.0 * eHue * viewingConditions.nc * viewingConditions.ncb;
        const t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
        const alpha = Math.pow(t, 0.9) *
            Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        // CAM16 chroma, colorfulness, chroma
        const C = alpha * Math.sqrt(J / 100.0);
        const M = C * viewingConditions.fLRoot;
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        // CAM16-UCS components
        const jstar = (1.0 + 100.0 * 0.007) * J / (1.0 + 0.007 * J);
        const mstar = Math.log(1.0 + 0.0228 * M) / 0.0228;
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(hue, C, J, Q, M, s, jstar, astar, bstar);
    }
    /// XYZ representation of CAM16 seen in [viewingConditions].
    xyzInViewingConditions(viewingConditions) {
        const alpha = (this.chroma === 0.0 || this.j === 0.0) ?
            0.0 :
            this.chroma / Math.sqrt(this.j / 100.0);
        const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1.0 / 0.9);
        const hRad = this.hue * Math.PI / 180.0;
        const eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8);
        const ac = viewingConditions.aw *
            Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const p2 = (ac / viewingConditions.nbb);
        const hSin = Math.sin(hRad);
        const hCos = Math.cos(hRad);
        const gamma = 23.0 * (p2 + 0.305) * t /
            (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin);
        const a = gamma * hCos;
        const b = gamma * hSin;
        const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
        const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
        const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
        const rCBase = Math.max(0, (27.13 * Math.abs(rA)) / (400.0 - Math.abs(rA)));
        const rC = signum(rA) * (100.0 / viewingConditions.fl) *
            Math.pow(rCBase, 1.0 / 0.42);
        const gCBase = Math.max(0, (27.13 * Math.abs(gA)) / (400.0 - Math.abs(gA)));
        const gC = signum(gA) * (100.0 / viewingConditions.fl) *
            Math.pow(gCBase, 1.0 / 0.42);
        const bCBase = Math.max(0, (27.13 * Math.abs(bA)) / (400.0 - Math.abs(bA)));
        const bC = signum(bA) * (100.0 / viewingConditions.fl) *
            Math.pow(bCBase, 1.0 / 0.42);
        const rF = rC / viewingConditions.rgbD[0];
        const gF = gC / viewingConditions.rgbD[1];
        const bF = bC / viewingConditions.rgbD[2];
        const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
        const y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
        const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
        return [x, y, z];
    }
}

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
 */
// This file is automatically generated. Do not modify it.
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * A class that solves the HCT equation.
 */
class HctSolver {
    /**
     * Sanitizes a small enough angle in radians.
     *
     * @param angle An angle in radians; must not deviate too much
     * from 0.
     * @return A coterminal angle between 0 and 2pi.
     */
    static sanitizeRadians(angle) {
        return (angle + Math.PI * 8) % (Math.PI * 2);
    }
    /**
     * Delinearizes an RGB component, returning a floating-point
     * number.
     *
     * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
     * linear R/G/B channel
     * @return 0.0 <= output <= 255.0, color channel converted to
     * regular RGB space
     */
    static trueDelinearized(rgbComponent) {
        const normalized = rgbComponent / 100.0;
        let delinearized = 0.0;
        if (normalized <= 0.0031308) {
            delinearized = normalized * 12.92;
        }
        else {
            delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
        }
        return delinearized * 255.0;
    }
    static chromaticAdaptation(component) {
        const af = Math.pow(Math.abs(component), 0.42);
        return signum(component) * 400.0 * af / (af + 27.13);
    }
    /**
     * Returns the hue of a linear RGB color in CAM16.
     *
     * @param linrgb The linear RGB coordinates of a color.
     * @return The hue of the color in CAM16, in radians.
     */
    static hueOf(linrgb) {
        const scaledDiscount = matrixMultiply(linrgb, HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
        const rA = HctSolver.chromaticAdaptation(scaledDiscount[0]);
        const gA = HctSolver.chromaticAdaptation(scaledDiscount[1]);
        const bA = HctSolver.chromaticAdaptation(scaledDiscount[2]);
        // redness-greenness
        const a = (11.0 * rA + -12 * gA + bA) / 11.0;
        // yellowness-blueness
        const b = (rA + gA - 2.0 * bA) / 9.0;
        return Math.atan2(b, a);
    }
    static areInCyclicOrder(a, b, c) {
        const deltaAB = HctSolver.sanitizeRadians(b - a);
        const deltaAC = HctSolver.sanitizeRadians(c - a);
        return deltaAB < deltaAC;
    }
    /**
     * Solves the lerp equation.
     *
     * @param source The starting number.
     * @param mid The number in the middle.
     * @param target The ending number.
     * @return A number t such that lerp(source, target, t) = mid.
     */
    static intercept(source, mid, target) {
        return (mid - source) / (target - source);
    }
    static lerpPoint(source, t, target) {
        return [
            source[0] + (target[0] - source[0]) * t,
            source[1] + (target[1] - source[1]) * t,
            source[2] + (target[2] - source[2]) * t,
        ];
    }
    /**
     * Intersects a segment with a plane.
     *
     * @param source The coordinates of point A.
     * @param coordinate The R-, G-, or B-coordinate of the plane.
     * @param target The coordinates of point B.
     * @param axis The axis the plane is perpendicular with. (0: R, 1:
     * G, 2: B)
     * @return The intersection point of the segment AB with the plane
     * R=coordinate, G=coordinate, or B=coordinate
     */
    static setCoordinate(source, coordinate, target, axis) {
        const t = HctSolver.intercept(source[axis], coordinate, target[axis]);
        return HctSolver.lerpPoint(source, t, target);
    }
    static isBounded(x) {
        return 0.0 <= x && x <= 100.0;
    }
    /**
     * Returns the nth possible vertex of the polygonal intersection.
     *
     * @param y The Y value of the plane.
     * @param n The zero-based index of the point. 0 <= n <= 11.
     * @return The nth possible vertex of the polygonal intersection
     * of the y plane and the RGB cube, in linear RGB coordinates, if
     * it exists. If this possible vertex lies outside of the cube,
     * [-1.0, -1.0, -1.0] is returned.
     */
    static nthVertex(y, n) {
        const kR = HctSolver.Y_FROM_LINRGB[0];
        const kG = HctSolver.Y_FROM_LINRGB[1];
        const kB = HctSolver.Y_FROM_LINRGB[2];
        const coordA = n % 4 <= 1 ? 0.0 : 100.0;
        const coordB = n % 2 === 0 ? 0.0 : 100.0;
        if (n < 4) {
            const g = coordA;
            const b = coordB;
            const r = (y - g * kG - b * kB) / kR;
            if (HctSolver.isBounded(r)) {
                return [r, g, b];
            }
            else {
                return [-1, -1, -1];
            }
        }
        else if (n < 8) {
            const b = coordA;
            const r = coordB;
            const g = (y - r * kR - b * kB) / kG;
            if (HctSolver.isBounded(g)) {
                return [r, g, b];
            }
            else {
                return [-1, -1, -1];
            }
        }
        else {
            const r = coordA;
            const g = coordB;
            const b = (y - r * kR - g * kG) / kB;
            if (HctSolver.isBounded(b)) {
                return [r, g, b];
            }
            else {
                return [-1, -1, -1];
            }
        }
    }
    /**
     * Finds the segment containing the desired color.
     *
     * @param y The Y value of the color.
     * @param targetHue The hue of the color.
     * @return A list of two sets of linear RGB coordinates, each
     * corresponding to an endpoint of the segment containing the
     * desired color.
     */
    static bisectToSegment(y, targetHue) {
        let left = [-1, -1, -1];
        let right = left;
        let leftHue = 0.0;
        let rightHue = 0.0;
        let initialized = false;
        let uncut = true;
        for (let n = 0; n < 12; n++) {
            const mid = HctSolver.nthVertex(y, n);
            if (mid[0] < 0) {
                continue;
            }
            const midHue = HctSolver.hueOf(mid);
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
                }
                else {
                    left = mid;
                    leftHue = midHue;
                }
            }
        }
        return [left, right];
    }
    static midpoint(a, b) {
        return [
            (a[0] + b[0]) / 2,
            (a[1] + b[1]) / 2,
            (a[2] + b[2]) / 2,
        ];
    }
    static criticalPlaneBelow(x) {
        return Math.floor(x - 0.5);
    }
    static criticalPlaneAbove(x) {
        return Math.ceil(x - 0.5);
    }
    /**
     * Finds a color with the given Y and hue on the boundary of the
     * cube.
     *
     * @param y The Y value of the color.
     * @param targetHue The hue of the color.
     * @return The desired color, in linear RGB coordinates.
     */
    static bisectToLimit(y, targetHue) {
        const segment = HctSolver.bisectToSegment(y, targetHue);
        let left = segment[0];
        let leftHue = HctSolver.hueOf(left);
        let right = segment[1];
        for (let axis = 0; axis < 3; axis++) {
            if (left[axis] !== right[axis]) {
                let lPlane = -1;
                let rPlane = 255;
                if (left[axis] < right[axis]) {
                    lPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(left[axis]));
                    rPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(right[axis]));
                }
                else {
                    lPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(left[axis]));
                    rPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(right[axis]));
                }
                for (let i = 0; i < 8; i++) {
                    if (Math.abs(rPlane - lPlane) <= 1) {
                        break;
                    }
                    else {
                        const mPlane = Math.floor((lPlane + rPlane) / 2.0);
                        const midPlaneCoordinate = HctSolver.CRITICAL_PLANES[mPlane];
                        const mid = HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
                        const midHue = HctSolver.hueOf(mid);
                        if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
                            right = mid;
                            rPlane = mPlane;
                        }
                        else {
                            left = mid;
                            leftHue = midHue;
                            lPlane = mPlane;
                        }
                    }
                }
            }
        }
        return HctSolver.midpoint(left, right);
    }
    static inverseChromaticAdaptation(adapted) {
        const adaptedAbs = Math.abs(adapted);
        const base = Math.max(0, 27.13 * adaptedAbs / (400.0 - adaptedAbs));
        return signum(adapted) * Math.pow(base, 1.0 / 0.42);
    }
    /**
     * Finds a color with the given hue, chroma, and Y.
     *
     * @param hueRadians The desired hue in radians.
     * @param chroma The desired chroma.
     * @param y The desired Y.
     * @return The desired color as a hexadecimal integer, if found; 0
     * otherwise.
     */
    static findResultByJ(hueRadians, chroma, y) {
        // Initial estimate of j.
        let j = Math.sqrt(y) * 11.0;
        // ===========================================================
        // Operations inlined from Cam16 to avoid repeated calculation
        // ===========================================================
        const viewingConditions = ViewingConditions.DEFAULT;
        const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const eHue = 0.25 * (Math.cos(hueRadians + 2.0) + 3.8);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const hSin = Math.sin(hueRadians);
        const hCos = Math.cos(hueRadians);
        for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
            // ===========================================================
            // Operations inlined from Cam16 to avoid repeated calculation
            // ===========================================================
            const jNormalized = j / 100.0;
            const alpha = chroma === 0.0 || j === 0.0 ? 0.0 : chroma / Math.sqrt(jNormalized);
            const t = Math.pow(alpha * tInnerCoeff, 1.0 / 0.9);
            const ac = viewingConditions.aw *
                Math.pow(jNormalized, 1.0 / viewingConditions.c / viewingConditions.z);
            const p2 = ac / viewingConditions.nbb;
            const gamma = 23.0 * (p2 + 0.305) * t /
                (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin);
            const a = gamma * hCos;
            const b = gamma * hSin;
            const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
            const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
            const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
            const rCScaled = HctSolver.inverseChromaticAdaptation(rA);
            const gCScaled = HctSolver.inverseChromaticAdaptation(gA);
            const bCScaled = HctSolver.inverseChromaticAdaptation(bA);
            const linrgb = matrixMultiply([rCScaled, gCScaled, bCScaled], HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
            // ===========================================================
            // Operations inlined from Cam16 to avoid repeated calculation
            // ===========================================================
            if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) {
                return 0;
            }
            const kR = HctSolver.Y_FROM_LINRGB[0];
            const kG = HctSolver.Y_FROM_LINRGB[1];
            const kB = HctSolver.Y_FROM_LINRGB[2];
            const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
            if (fnj <= 0) {
                return 0;
            }
            if (iterationRound === 4 || Math.abs(fnj - y) < 0.002) {
                if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
                    return 0;
                }
                return argbFromLinrgb(linrgb);
            }
            // Iterates with Newton method,
            // Using 2 * fn(j) / j as the approximation of fn'(j)
            j = j - (fnj - y) * j / (2 * fnj);
        }
        return 0;
    }
    /**
     * Finds an sRGB color with the given hue, chroma, and L*, if
     * possible.
     *
     * @param hueDegrees The desired hue, in degrees.
     * @param chroma The desired chroma.
     * @param lstar The desired L*.
     * @return A hexadecimal representing the sRGB color. The color
     * has sufficiently close hue, chroma, and L* to the desired
     * values, if possible; otherwise, the hue and L* will be
     * sufficiently close, and chroma will be maximized.
     */
    static solveToInt(hueDegrees, chroma, lstar) {
        if (chroma < 0.0001 || lstar < 0.0001 || lstar > 99.9999) {
            return argbFromLstar(lstar);
        }
        hueDegrees = sanitizeDegreesDouble(hueDegrees);
        const hueRadians = hueDegrees / 180 * Math.PI;
        const y = yFromLstar(lstar);
        const exactAnswer = HctSolver.findResultByJ(hueRadians, chroma, y);
        if (exactAnswer !== 0) {
            return exactAnswer;
        }
        const linrgb = HctSolver.bisectToLimit(y, hueRadians);
        return argbFromLinrgb(linrgb);
    }
    /**
     * Finds an sRGB color with the given hue, chroma, and L*, if
     * possible.
     *
     * @param hueDegrees The desired hue, in degrees.
     * @param chroma The desired chroma.
     * @param lstar The desired L*.
     * @return An CAM16 object representing the sRGB color. The color
     * has sufficiently close hue, chroma, and L* to the desired
     * values, if possible; otherwise, the hue and L* will be
     * sufficiently close, and chroma will be maximized.
     */
    static solveToCam(hueDegrees, chroma, lstar) {
        return Cam16.fromInt(HctSolver.solveToInt(hueDegrees, chroma, lstar));
    }
}
HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
    [
        0.001200833568784504,
        0.002389694492170889,
        0.0002795742885861124,
    ],
    [
        0.0005891086651375999,
        0.0029785502573438758,
        0.0003270666104008398,
    ],
    [
        0.00010146692491640572,
        0.0005364214359186694,
        0.0032979401770712076,
    ],
];
HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
    [
        1373.2198709594231,
        -1100.4251190754821,
        -7.278681089101213,
    ],
    [
        -271.815969077903,
        559.6580465940733,
        -32.46047482791194,
    ],
    [
        1.9622899599665666,
        -57.173814538844006,
        308.7233197812385,
    ],
];
HctSolver.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
HctSolver.CRITICAL_PLANES = [
    0.015176349177441876, 0.045529047532325624, 0.07588174588720938,
    0.10623444424209313, 0.13658714259697685, 0.16693984095186062,
    0.19729253930674434, 0.2276452376616281, 0.2579979360165119,
    0.28835063437139563, 0.3188300904430532, 0.350925934958123,
    0.3848314933096426, 0.42057480301049466, 0.458183274052838,
    0.4976837250274023, 0.5391024159806381, 0.5824650784040898,
    0.6277969426914107, 0.6751227633498623, 0.7244668422128921,
    0.775853049866786, 0.829304845476233, 0.8848452951698498,
    0.942497089126609, 1.0022825574869039, 1.0642236851973577,
    1.1283421258858297, 1.1946592148522128, 1.2631959812511864,
    1.3339731595349034, 1.407011200216447, 1.4823302800086415,
    1.5599503113873272, 1.6398909516233677, 1.7221716113234105,
    1.8068114625156377, 1.8938294463134073, 1.9832442801866852,
    2.075074464868551, 2.1693382909216234, 2.2660538449872063,
    2.36523901573795, 2.4669114995532007, 2.5710888059345764,
    2.6777882626779785, 2.7870270208169257, 2.898822059350997,
    3.0131901897720907, 3.1301480604002863, 3.2497121605402226,
    3.3718988244681087, 3.4967242352587946, 3.624204428461639,
    3.754355295633311, 3.887192587735158, 4.022731918402185,
    4.160988767090289, 4.301978482107941, 4.445716283538092,
    4.592217266055746, 4.741496401646282, 4.893568542229298,
    5.048448422192488, 5.20615066083972, 5.3666897647573375,
    5.5300801301023865, 5.696336044816294, 5.865471690767354,
    6.037501145825082, 6.212438385869475, 6.390297286737924,
    6.571091626112461, 6.7548350853498045, 6.941541251256611,
    7.131223617812143, 7.323895587840543, 7.5195704746346665,
    7.7182615035334345, 7.919981813454504, 8.124744458384042,
    8.332562408825165, 8.543448553206703, 8.757415699253682,
    8.974476575321063, 9.194643831691977, 9.417930041841839,
    9.644347703669503, 9.873909240696694, 10.106627003236781,
    10.342513269534024, 10.58158024687427, 10.8238400726681,
    11.069304815507364, 11.317986476196008, 11.569896988756009,
    11.825048221409341, 12.083451977536606, 12.345119996613247,
    12.610063955123938, 12.878295467455942, 13.149826086772048,
    13.42466730586372, 13.702830557985108, 13.984327217668513,
    14.269168601521828, 14.55736596900856, 14.848930523210871,
    15.143873411576273, 15.44220572664832, 15.743938506781891,
    16.04908273684337, 16.35764934889634, 16.66964922287304,
    16.985093187232053, 17.30399201960269, 17.62635644741625,
    17.95219714852476, 18.281524751807332, 18.614349837764564,
    18.95068293910138, 19.290534541298456, 19.633915083172692,
    19.98083495742689, 20.331304511189067, 20.685334046541502,
    21.042933821039977, 21.404114048223256, 21.76888489811322,
    22.137256497705877, 22.50923893145328, 22.884842241736916,
    23.264076429332462, 23.6469514538663, 24.033477234264016,
    24.42366364919083, 24.817520537484558, 25.21505769858089,
    25.61628489293138, 26.021211842414342, 26.429848230738664,
    26.842203703840827, 27.258287870275353, 27.678110301598522,
    28.10168053274597, 28.529008062403893, 28.96010235337422,
    29.39497283293396, 29.83362889318845, 30.276079891419332,
    30.722335150426627, 31.172403958865512, 31.62629557157785,
    32.08401920991837, 32.54558406207592, 33.010999283389665,
    33.4802739966603, 33.953417292456834, 34.430438229418264,
    34.911345834551085, 35.39614910352207, 35.88485700094671,
    36.37747846067349, 36.87402238606382, 37.37449765026789,
    37.87891309649659, 38.38727753828926, 38.89959975977785,
    39.41588851594697, 39.93615253289054, 40.460400508064545,
    40.98864111053629, 41.520882981230194, 42.05713473317016,
    42.597404951718396, 43.141702194811224, 43.6900349931913,
    44.24241185063697, 44.798841244188324, 45.35933162437017,
    45.92389141541209, 46.49252901546552, 47.065252796817916,
    47.64207110610409, 48.22299226451468, 48.808024568002054,
    49.3971762874833, 49.9904556690408, 50.587870934119984,
    51.189430279724725, 51.79514187861014, 52.40501387947288,
    53.0190544071392, 53.637271562750364, 54.259673423945976,
    54.88626804504493, 55.517063457223934, 56.15206766869424,
    56.79128866487574, 57.43473440856916, 58.08241284012621,
    58.734331877617365, 59.39049941699807, 60.05092333227251,
    60.715611475655585, 61.38457167773311, 62.057811747619894,
    62.7353394731159, 63.417162620860914, 64.10328893648692,
    64.79372614476921, 65.48848194977529, 66.18756403501224,
    66.89098006357258, 67.59873767827808, 68.31084450182222,
    69.02730813691093, 69.74813616640164, 70.47333615344107,
    71.20291564160104, 71.93688215501312, 72.67524319850172,
    73.41800625771542, 74.16517879925733, 74.9167682708136,
    75.67278210128072, 76.43322770089146, 77.1981124613393,
    77.96744375590167, 78.74122893956174, 79.51947534912904,
    80.30219030335869, 81.08938110306934, 81.88105503125999,
    82.67721935322541, 83.4778813166706, 84.28304815182372,
    85.09272707154808, 85.90692527145302, 86.72564993000343,
    87.54890820862819, 88.3767072518277, 89.2090541872801,
    90.04595612594655, 90.88742016217518, 91.73345337380438,
    92.58406282226491, 93.43925555268066, 94.29903859396902,
    95.16341895893969, 96.03240364439274, 96.9059996312159,
    97.78421388448044, 98.6670533535366, 99.55452497210776,
];

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
 */
/**
 * A color system built using CAM16 hue and chroma, and L* from
 * L*a*b*.
 *
 * Using L* creates a link between the color system, contrast, and thus
 * accessibility. Contrast ratio depends on relative luminance, or Y in the XYZ
 * color space. L*, or perceptual luminance can be calculated from Y.
 *
 * Unlike Y, L* is linear to human perception, allowing trivial creation of
 * accurate color tones.
 *
 * Unlike contrast ratio, measuring contrast in L* is linear, and simple to
 * calculate. A difference of 40 in HCT tone guarantees a contrast ratio >= 3.0,
 * and a difference of 50 guarantees a contrast ratio >= 4.5.
 */
/**
 * HCT, hue, chroma, and tone. A color system that provides a perceptually
 * accurate color measurement system that can also accurately render what colors
 * will appear as in different lighting environments.
 */
class Hct {
    static from(hue, chroma, tone) {
        return new Hct(HctSolver.solveToInt(hue, chroma, tone));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return HCT representation of a color in default viewing conditions
     */
    static fromInt(argb) {
        return new Hct(argb);
    }
    toInt() {
        return this.argb;
    }
    /**
     * A number, in degrees, representing ex. red, orange, yellow, etc.
     * Ranges from 0 <= hue < 360.
     */
    get hue() {
        return this.internalHue;
    }
    /**
     * @param newHue 0 <= newHue < 360; invalid values are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set hue(newHue) {
        this.setInternalState(HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
    }
    get chroma() {
        return this.internalChroma;
    }
    /**
     * @param newChroma 0 <= newChroma < ?
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set chroma(newChroma) {
        this.setInternalState(HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
    }
    /** Lightness. Ranges from 0 to 100. */
    get tone() {
        return this.internalTone;
    }
    /**
     * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set tone(newTone) {
        this.setInternalState(HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
    }
    constructor(argb) {
        this.argb = argb;
        const cam = Cam16.fromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = lstarFromArgb(argb);
        this.argb = argb;
    }
    setInternalState(argb) {
        const cam = Cam16.fromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = lstarFromArgb(argb);
        this.argb = argb;
    }
    /**
     * Translates a color into different [ViewingConditions].
     *
     * Colors change appearance. They look different with lights on versus off,
     * the same color, as in hex code, on white looks different when on black.
     * This is called color relativity, most famously explicated by Josef Albers
     * in Interaction of Color.
     *
     * In color science, color appearance models can account for this and
     * calculate the appearance of a color in different settings. HCT is based on
     * CAM16, a color appearance model, and uses it to make these calculations.
     *
     * See [ViewingConditions.make] for parameters affecting color appearance.
     */
    inViewingConditions(vc) {
        // 1. Use CAM16 to find XYZ coordinates of color in specified VC.
        const cam = Cam16.fromInt(this.toInt());
        const viewedInVc = cam.xyzInViewingConditions(vc);
        // 2. Create CAM16 of those XYZ coordinates in default VC.
        const recastInVc = Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], ViewingConditions.make());
        // 3. Create HCT from:
        // - CAM16 using default VC with XYZ coordinates in specified VC.
        // - L* converted from Y in XYZ coordinates in specified VC.
        const recastHct = Hct.from(recastInVc.hue, recastInVc.chroma, lstarFromY(viewedInVc[1]));
        return recastHct;
    }
}

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
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Utility methods for calculating contrast given two colors, or calculating a
 * color given one color and a contrast ratio.
 *
 * Contrast ratio is calculated using XYZ's Y. When linearized to match human
 * perception, Y becomes HCT's tone and L*a*b*'s' L*. Informally, this is the
 * lightness of a color.
 *
 * Methods refer to tone, T in the the HCT color space.
 * Tone is equivalent to L* in the L*a*b* color space, or L in the LCH color
 * space.
 */
class Contrast {
    /**
     * Returns a contrast ratio, which ranges from 1 to 21.
     *
     * @param toneA Tone between 0 and 100. Values outside will be clamped.
     * @param toneB Tone between 0 and 100. Values outside will be clamped.
     */
    static ratioOfTones(toneA, toneB) {
        toneA = clampDouble(0.0, 100.0, toneA);
        toneB = clampDouble(0.0, 100.0, toneB);
        return Contrast.ratioOfYs(yFromLstar(toneA), yFromLstar(toneB));
    }
    static ratioOfYs(y1, y2) {
        const lighter = y1 > y2 ? y1 : y2;
        const darker = (lighter === y2) ? y1 : y2;
        return (lighter + 5.0) / (darker + 5.0);
    }
    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns -1 if ratio cannot be achieved with tone parameter.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in -1 being returned.
     * @param ratio Contrast ratio of return value and tone.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static lighter(tone, ratio) {
        if (tone < 0.0 || tone > 100.0) {
            return -1;
        }
        const darkY = yFromLstar(tone);
        const lightY = ratio * (darkY + 5.0) - 5.0;
        const realContrast = Contrast.ratioOfYs(lightY, darkY);
        const delta = Math.abs(realContrast - ratio);
        if (realContrast < ratio && delta > 0.04) {
            return -1;
        }
        // Ensure gamut mapping, which requires a 'range' on tone, will still result
        // the correct ratio by darkening slightly.
        const returnValue = lstarFromY(lightY) + 0.4;
        if (returnValue < 0 || returnValue > 100) {
            return -1;
        }
        return returnValue;
    }
    /**
     * Returns a tone <= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns -1 if ratio cannot be achieved with tone parameter.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in -1 being returned.
     * @param ratio Contrast ratio of return value and tone.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static darker(tone, ratio) {
        if (tone < 0.0 || tone > 100.0) {
            return -1;
        }
        const lightY = yFromLstar(tone);
        const darkY = ((lightY + 5.0) / ratio) - 5.0;
        const realContrast = Contrast.ratioOfYs(lightY, darkY);
        const delta = Math.abs(realContrast - ratio);
        if (realContrast < ratio && delta > 0.04) {
            return -1;
        }
        // Ensure gamut mapping, which requires a 'range' on tone, will still result
        // the correct ratio by darkening slightly.
        const returnValue = lstarFromY(darkY) - 0.4;
        if (returnValue < 0 || returnValue > 100) {
            return -1;
        }
        return returnValue;
    }
    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns 100 if ratio cannot be achieved with tone parameter.
     *
     * This method is unsafe because the returned value is guaranteed to be in
     * bounds for tone, i.e. between 0 and 100. However, that value may not reach
     * the ratio with tone. For example, there is no color lighter than T100.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in 100 being returned.
     * @param ratio Desired contrast ratio of return value and tone parameter.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static lighterUnsafe(tone, ratio) {
        const lighterSafe = Contrast.lighter(tone, ratio);
        return (lighterSafe < 0.0) ? 100.0 : lighterSafe;
    }
    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns 100 if ratio cannot be achieved with tone parameter.
     *
     * This method is unsafe because the returned value is guaranteed to be in
     * bounds for tone, i.e. between 0 and 100. However, that value may not reach
     * the [ratio with [tone]. For example, there is no color darker than T0.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in 0 being returned.
     * @param ratio Desired contrast ratio of return value and tone parameter.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static darkerUnsafe(tone, ratio) {
        const darkerSafe = Contrast.darker(tone, ratio);
        return (darkerSafe < 0.0) ? 0.0 : darkerSafe;
    }
}

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
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Check and/or fix universally disliked colors.
 * Color science studies of color preference indicate universal distaste for
 * dark yellow-greens, and also show this is correlated to distate for
 * biological waste and rotting food.
 *
 * See Palmer and Schloss, 2010 or Schloss and Palmer's Chapter 21 in Handbook
 * of Color Psychology (2015).
 */
class DislikeAnalyzer {
    /**
     * Returns true if a color is disliked.
     *
     * @param hct A color to be judged.
     * @return Whether the color is disliked.
     *
     * Disliked is defined as a dark yellow-green that is not neutral.
     */
    static isDisliked(hct) {
        const huePasses = Math.round(hct.hue) >= 90.0 && Math.round(hct.hue) <= 111.0;
        const chromaPasses = Math.round(hct.chroma) > 16.0;
        const tonePasses = Math.round(hct.tone) < 65.0;
        return huePasses && chromaPasses && tonePasses;
    }
    /**
     * If a color is disliked, lighten it to make it likable.
     *
     * @param hct A color to be judged.
     * @return A new color if the original color is disliked, or the original
     *   color if it is acceptable.
     */
    static fixIfDisliked(hct) {
        if (DislikeAnalyzer.isDisliked(hct)) {
            return Hct.from(hct.hue, hct.chroma, 70.0);
        }
        return hct;
    }
}

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
 */
/**
 * A color that adjusts itself based on UI state provided by DynamicScheme.
 *
 * Colors without backgrounds do not change tone when contrast changes. Colors
 * with backgrounds become closer to their background as contrast lowers, and
 * further when contrast increases.
 *
 * Prefer static constructors. They require either a hexcode, a palette and
 * tone, or a hue and chroma. Optionally, they can provide a background
 * DynamicColor.
 */
class DynamicColor {
    /**
     * Create a DynamicColor defined by a TonalPalette and HCT tone.
     *
     * @param args Functions with DynamicScheme as input. Must provide a palette
     * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
     */
    static fromPalette(args) {
        return new DynamicColor(args.name ?? '', args.palette, args.tone, args.isBackground ?? false, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
    }
    /**
     * The base constructor for DynamicColor.
     *
     * _Strongly_ prefer using one of the convenience constructors. This class is
     * arguably too flexible to ensure it can support any scenario. Functional
     * arguments allow  overriding without risks that come with subclasses.
     *
     * For example, the default behavior of adjust tone at max contrast
     * to be at a 7.0 ratio with its background is principled and
     * matches accessibility guidance. That does not mean it's the desired
     * approach for _every_ design system, and every color pairing,
     * always, in every case.
     *
     * @param name The name of the dynamic color. Defaults to empty.
     * @param palette Function that provides a TonalPalette given
     * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
     * replaces the need to specify hue/chroma. By providing a tonal palette, when
     * contrast adjustments are made, intended chroma can be preserved.
     * @param tone Function that provides a tone, given a DynamicScheme.
     * @param isBackground Whether this dynamic color is a background, with
     * some other color as the foreground. Defaults to false.
     * @param background The background of the dynamic color (as a function of a
     *     `DynamicScheme`), if it exists.
     * @param secondBackground A second background of the dynamic color (as a
     *     function of a `DynamicScheme`), if it
     * exists.
     * @param contrastCurve A `ContrastCurve` object specifying how its contrast
     * against its background should behave in various contrast levels options.
     * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
     * constraint between two colors. One of them must be the color being
     * constructed.
     */
    constructor(name, palette, tone, isBackground, background, secondBackground, contrastCurve, toneDeltaPair) {
        this.name = name;
        this.palette = palette;
        this.tone = tone;
        this.isBackground = isBackground;
        this.background = background;
        this.secondBackground = secondBackground;
        this.contrastCurve = contrastCurve;
        this.toneDeltaPair = toneDeltaPair;
        this.hctCache = new Map();
        if ((!background) && secondBackground) {
            throw new Error(`Color ${name} has secondBackground` +
                `defined, but background is not defined.`);
        }
        if ((!background) && contrastCurve) {
            throw new Error(`Color ${name} has contrastCurve` +
                `defined, but background is not defined.`);
        }
        if (background && !contrastCurve) {
            throw new Error(`Color ${name} has background` +
                `defined, but contrastCurve is not defined.`);
        }
    }
    /**
     * Return a ARGB integer (i.e. a hex code).
     *
     * @param scheme Defines the conditions of the user interface, for example,
     * whether or not it is dark mode or light mode, and what the desired
     * contrast level is.
     */
    getArgb(scheme) {
        return this.getHct(scheme).toInt();
    }
    /**
     * Return a color, expressed in the HCT color space, that this
     * DynamicColor is under the conditions in scheme.
     *
     * @param scheme Defines the conditions of the user interface, for example,
     * whether or not it is dark mode or light mode, and what the desired
     * contrast level is.
     */
    getHct(scheme) {
        const cachedAnswer = this.hctCache.get(scheme);
        if (cachedAnswer != null) {
            return cachedAnswer;
        }
        const tone = this.getTone(scheme);
        const answer = this.palette(scheme).getHct(tone);
        if (this.hctCache.size > 4) {
            this.hctCache.clear();
        }
        this.hctCache.set(scheme, answer);
        return answer;
    }
    /**
     * Return a tone, T in the HCT color space, that this DynamicColor is under
     * the conditions in scheme.
     *
     * @param scheme Defines the conditions of the user interface, for example,
     * whether or not it is dark mode or light mode, and what the desired
     * contrast level is.
     */
    getTone(scheme) {
        const decreasingContrast = scheme.contrastLevel < 0;
        // Case 1: dual foreground, pair of colors with delta constraint.
        if (this.toneDeltaPair) {
            const toneDeltaPair = this.toneDeltaPair(scheme);
            const roleA = toneDeltaPair.roleA;
            const roleB = toneDeltaPair.roleB;
            const delta = toneDeltaPair.delta;
            const polarity = toneDeltaPair.polarity;
            const stayTogether = toneDeltaPair.stayTogether;
            const bg = this.background(scheme);
            const bgTone = bg.getTone(scheme);
            const aIsNearer = (polarity === 'nearer' ||
                (polarity === 'lighter' && !scheme.isDark) ||
                (polarity === 'darker' && scheme.isDark));
            const nearer = aIsNearer ? roleA : roleB;
            const farther = aIsNearer ? roleB : roleA;
            const amNearer = this.name === nearer.name;
            const expansionDir = scheme.isDark ? 1 : -1;
            // 1st round: solve to min, each
            const nContrast = nearer.contrastCurve.get(scheme.contrastLevel);
            const fContrast = farther.contrastCurve.get(scheme.contrastLevel);
            // If a color is good enough, it is not adjusted.
            // Initial and adjusted tones for `nearer`
            const nInitialTone = nearer.tone(scheme);
            let nTone = Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast ?
                nInitialTone :
                DynamicColor.foregroundTone(bgTone, nContrast);
            // Initial and adjusted tones for `farther`
            const fInitialTone = farther.tone(scheme);
            let fTone = Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast ?
                fInitialTone :
                DynamicColor.foregroundTone(bgTone, fContrast);
            if (decreasingContrast) {
                // If decreasing contrast, adjust color to the "bare minimum"
                // that satisfies contrast.
                nTone = DynamicColor.foregroundTone(bgTone, nContrast);
                fTone = DynamicColor.foregroundTone(bgTone, fContrast);
            }
            if ((fTone - nTone) * expansionDir >= delta) ;
            else {
                // 2nd round: expand farther to match delta.
                fTone = clampDouble(0, 100, nTone + delta * expansionDir);
                if ((fTone - nTone) * expansionDir >= delta) ;
                else {
                    // 3rd round: contract nearer to match delta.
                    nTone = clampDouble(0, 100, fTone - delta * expansionDir);
                }
            }
            // Avoids the 50-59 awkward zone.
            if (50 <= nTone && nTone < 60) {
                // If `nearer` is in the awkward zone, move it away, together with
                // `farther`.
                if (expansionDir > 0) {
                    nTone = 60;
                    fTone = Math.max(fTone, nTone + delta * expansionDir);
                }
                else {
                    nTone = 49;
                    fTone = Math.min(fTone, nTone + delta * expansionDir);
                }
            }
            else if (50 <= fTone && fTone < 60) {
                if (stayTogether) {
                    // Fixes both, to avoid two colors on opposite sides of the "awkward
                    // zone".
                    if (expansionDir > 0) {
                        nTone = 60;
                        fTone = Math.max(fTone, nTone + delta * expansionDir);
                    }
                    else {
                        nTone = 49;
                        fTone = Math.min(fTone, nTone + delta * expansionDir);
                    }
                }
                else {
                    // Not required to stay together; fixes just one.
                    if (expansionDir > 0) {
                        fTone = 60;
                    }
                    else {
                        fTone = 49;
                    }
                }
            }
            // Returns `nTone` if this color is `nearer`, otherwise `fTone`.
            return amNearer ? nTone : fTone;
        }
        else {
            // Case 2: No contrast pair; just solve for itself.
            let answer = this.tone(scheme);
            if (this.background == null) {
                return answer; // No adjustment for colors with no background.
            }
            const bgTone = this.background(scheme).getTone(scheme);
            const desiredRatio = this.contrastCurve.get(scheme.contrastLevel);
            if (Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) ;
            else {
                // Rough improvement.
                answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
            }
            if (decreasingContrast) {
                answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
            }
            if (this.isBackground && 50 <= answer && answer < 60) {
                // Must adjust
                if (Contrast.ratioOfTones(49, bgTone) >= desiredRatio) {
                    answer = 49;
                }
                else {
                    answer = 60;
                }
            }
            if (this.secondBackground) {
                // Case 3: Adjust for dual backgrounds.
                const [bg1, bg2] = [this.background, this.secondBackground];
                const [bgTone1, bgTone2] = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)];
                const [upper, lower] = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)];
                if (Contrast.ratioOfTones(upper, answer) >= desiredRatio &&
                    Contrast.ratioOfTones(lower, answer) >= desiredRatio) {
                    return answer;
                }
                // The darkest light tone that satisfies the desired ratio,
                // or -1 if such ratio cannot be reached.
                const lightOption = Contrast.lighter(upper, desiredRatio);
                // The lightest dark tone that satisfies the desired ratio,
                // or -1 if such ratio cannot be reached.
                const darkOption = Contrast.darker(lower, desiredRatio);
                // Tones suitable for the foreground.
                const availables = [];
                if (lightOption !== -1)
                    availables.push(lightOption);
                if (darkOption !== -1)
                    availables.push(darkOption);
                const prefersLight = DynamicColor.tonePrefersLightForeground(bgTone1) ||
                    DynamicColor.tonePrefersLightForeground(bgTone2);
                if (prefersLight) {
                    return (lightOption < 0) ? 100 : lightOption;
                }
                if (availables.length === 1) {
                    return availables[0];
                }
                return (darkOption < 0) ? 0 : darkOption;
            }
            return answer;
        }
    }
    /**
     * Given a background tone, find a foreground tone, while ensuring they reach
     * a contrast ratio that is as close to [ratio] as possible.
     *
     * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
     *     falls outside that range.
     * @param ratio The contrast ratio desired between bgTone and the return
     *     value.
     */
    static foregroundTone(bgTone, ratio) {
        const lighterTone = Contrast.lighterUnsafe(bgTone, ratio);
        const darkerTone = Contrast.darkerUnsafe(bgTone, ratio);
        const lighterRatio = Contrast.ratioOfTones(lighterTone, bgTone);
        const darkerRatio = Contrast.ratioOfTones(darkerTone, bgTone);
        const preferLighter = DynamicColor.tonePrefersLightForeground(bgTone);
        if (preferLighter) {
            // This handles an edge case where the initial contrast ratio is high
            // (ex. 13.0), and the ratio passed to the function is that high
            // ratio, and both the lighter and darker ratio fails to pass that
            // ratio.
            //
            // This was observed with Tonal Spot's On Primary Container turning
            // black momentarily between high and max contrast in light mode. PC's
            // standard tone was T90, OPC's was T10, it was light mode, and the
            // contrast value was 0.6568521221032331.
            const negligibleDifference = Math.abs(lighterRatio - darkerRatio) < 0.1 &&
                lighterRatio < ratio && darkerRatio < ratio;
            return lighterRatio >= ratio || lighterRatio >= darkerRatio ||
                negligibleDifference ?
                lighterTone :
                darkerTone;
        }
        else {
            return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone :
                lighterTone;
        }
    }
    /**
     * Returns whether [tone] prefers a light foreground.
     *
     * People prefer white foregrounds on ~T60-70. Observed over time, and also
     * by Andrew Somers during research for APCA.
     *
     * T60 used as to create the smallest discontinuity possible when skipping
     * down to T49 in order to ensure light foregrounds.
     * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
     * 60, it should not be adjusted. Therefore, 60 is excluded here.
     */
    static tonePrefersLightForeground(tone) {
        return Math.round(tone) < 60.0;
    }
    /**
     * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
     * color.
     */
    static toneAllowsLightForeground(tone) {
        return Math.round(tone) <= 49.0;
    }
    /**
     * Adjust a tone such that white has 4.5 contrast, if the tone is
     * reasonably close to supporting it.
     */
    static enableLightForeground(tone) {
        if (DynamicColor.tonePrefersLightForeground(tone) &&
            !DynamicColor.toneAllowsLightForeground(tone)) {
            return 49.0;
        }
        return tone;
    }
}

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
 */
/**
 *  A convenience class for retrieving colors that are constant in hue and
 *  chroma, but vary in tone.
 */
class TonalPalette {
    /**
     * @param argb ARGB representation of a color
     * @return Tones matching that color's hue and chroma.
     */
    static fromInt(argb) {
        const hct = Hct.fromInt(argb);
        return TonalPalette.fromHct(hct);
    }
    /**
     * @param hct Hct
     * @return Tones matching that color's hue and chroma.
     */
    static fromHct(hct) {
        return new TonalPalette(hct.hue, hct.chroma, hct);
    }
    /**
     * @param hue HCT hue
     * @param chroma HCT chroma
     * @return Tones matching hue and chroma.
     */
    static fromHueAndChroma(hue, chroma) {
        const keyColor = new KeyColor(hue, chroma).create();
        return new TonalPalette(hue, chroma, keyColor);
    }
    constructor(hue, chroma, keyColor) {
        this.hue = hue;
        this.chroma = chroma;
        this.keyColor = keyColor;
        this.cache = new Map();
    }
    /**
     * @param tone HCT tone, measured from 0 to 100.
     * @return ARGB representation of a color with that tone.
     */
    tone(tone) {
        let argb = this.cache.get(tone);
        if (argb === undefined) {
            argb = Hct.from(this.hue, this.chroma, tone).toInt();
            this.cache.set(tone, argb);
        }
        return argb;
    }
    /**
     * @param tone HCT tone.
     * @return HCT representation of a color with that tone.
     */
    getHct(tone) {
        return Hct.fromInt(this.tone(tone));
    }
}
/**
 * Key color is a color that represents the hue and chroma of a tonal palette
 */
class KeyColor {
    constructor(hue, requestedChroma) {
        this.hue = hue;
        this.requestedChroma = requestedChroma;
        // Cache that maps tone to max chroma to avoid duplicated HCT calculation.
        this.chromaCache = new Map();
        this.maxChromaValue = 200.0;
    }
    /**
     * Creates a key color from a [hue] and a [chroma].
     * The key color is the first tone, starting from T50, matching the given hue
     * and chroma.
     *
     * @return Key color [Hct]
     */
    create() {
        // Pivot around T50 because T50 has the most chroma available, on
        // average. Thus it is most likely to have a direct answer.
        const pivotTone = 50;
        const toneStepSize = 1;
        // Epsilon to accept values slightly higher than the requested chroma.
        const epsilon = 0.01;
        // Binary search to find the tone that can provide a chroma that is closest
        // to the requested chroma.
        let lowerTone = 0;
        let upperTone = 100;
        while (lowerTone < upperTone) {
            const midTone = Math.floor((lowerTone + upperTone) / 2);
            const isAscending = this.maxChroma(midTone) < this.maxChroma(midTone + toneStepSize);
            const sufficientChroma = this.maxChroma(midTone) >= this.requestedChroma - epsilon;
            if (sufficientChroma) {
                // Either range [lowerTone, midTone] or [midTone, upperTone] has
                // the answer, so search in the range that is closer the pivot tone.
                if (Math.abs(lowerTone - pivotTone) < Math.abs(upperTone - pivotTone)) {
                    upperTone = midTone;
                }
                else {
                    if (lowerTone === midTone) {
                        return Hct.from(this.hue, this.requestedChroma, lowerTone);
                    }
                    lowerTone = midTone;
                }
            }
            else {
                // As there is no sufficient chroma in the midTone, follow the direction
                // to the chroma peak.
                if (isAscending) {
                    lowerTone = midTone + toneStepSize;
                }
                else {
                    // Keep midTone for potential chroma peak.
                    upperTone = midTone;
                }
            }
        }
        return Hct.from(this.hue, this.requestedChroma, lowerTone);
    }
    // Find the maximum chroma for a given tone
    maxChroma(tone) {
        if (this.chromaCache.has(tone)) {
            return this.chromaCache.get(tone);
        }
        const chroma = Hct.from(this.hue, this.maxChromaValue, tone).chroma;
        this.chromaCache.set(tone, chroma);
        return chroma;
    }
}

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
 */
/**
 * A class containing a value that changes with the contrast level.
 *
 * Usually represents the contrast requirements for a dynamic color on its
 * background. The four values correspond to values for contrast levels -1.0,
 * 0.0, 0.5, and 1.0, respectively.
 */
class ContrastCurve {
    /**
     * Creates a `ContrastCurve` object.
     *
     * @param low Value for contrast level -1.0
     * @param normal Value for contrast level 0.0
     * @param medium Value for contrast level 0.5
     * @param high Value for contrast level 1.0
     */
    constructor(low, normal, medium, high) {
        this.low = low;
        this.normal = normal;
        this.medium = medium;
        this.high = high;
    }
    /**
     * Returns the value at a given contrast level.
     *
     * @param contrastLevel The contrast level. 0.0 is the default (normal); -1.0
     *     is the lowest; 1.0 is the highest.
     * @return The value. For contrast ratios, a number between 1.0 and 21.0.
     */
    get(contrastLevel) {
        if (contrastLevel <= -1) {
            return this.low;
        }
        else if (contrastLevel < 0.0) {
            return lerp(this.low, this.normal, (contrastLevel - (-1)) / 1);
        }
        else if (contrastLevel < 0.5) {
            return lerp(this.normal, this.medium, (contrastLevel - 0) / 0.5);
        }
        else if (contrastLevel < 1.0) {
            return lerp(this.medium, this.high, (contrastLevel - 0.5) / 0.5);
        }
        else {
            return this.high;
        }
    }
}

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
 */
/**
 * Documents a constraint between two DynamicColors, in which their tones must
 * have a certain distance from each other.
 *
 * Prefer a DynamicColor with a background, this is for special cases when
 * designers want tonal distance, literally contrast, between two colors that
 * don't have a background / foreground relationship or a contrast guarantee.
 */
class ToneDeltaPair {
    /**
     * Documents a constraint in tone distance between two DynamicColors.
     *
     * The polarity is an adjective that describes "A", compared to "B".
     *
     * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
     * A's tone should be at least 15 darker than B's.
     *
     * 'nearer' and 'farther' describes closeness to the surface roles. For
     * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
     * should be 10 lighter than B in light mode, and 10 darker than B in dark
     * mode.
     *
     * @param roleA The first role in a pair.
     * @param roleB The second role in a pair.
     * @param delta Required difference between tones. Absolute value, negative
     * values have undefined behavior.
     * @param polarity The relative relation between tones of roleA and roleB,
     * as described above.
     * @param stayTogether Whether these two roles should stay on the same side of
     * the "awkward zone" (T50-59). This is necessary for certain cases where
     * one role has two backgrounds.
     */
    constructor(roleA, roleB, delta, polarity, stayTogether) {
        this.roleA = roleA;
        this.roleB = roleB;
        this.delta = delta;
        this.polarity = polarity;
        this.stayTogether = stayTogether;
    }
}

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
 */
/**
 * Set of themes supported by Dynamic Color.
 * Instantiate the corresponding subclass, ex. SchemeTonalSpot, to create
 * colors corresponding to the theme.
 */
var Variant;
(function (Variant) {
    Variant[Variant["MONOCHROME"] = 0] = "MONOCHROME";
    Variant[Variant["NEUTRAL"] = 1] = "NEUTRAL";
    Variant[Variant["TONAL_SPOT"] = 2] = "TONAL_SPOT";
    Variant[Variant["VIBRANT"] = 3] = "VIBRANT";
    Variant[Variant["EXPRESSIVE"] = 4] = "EXPRESSIVE";
    Variant[Variant["FIDELITY"] = 5] = "FIDELITY";
    Variant[Variant["CONTENT"] = 6] = "CONTENT";
    Variant[Variant["RAINBOW"] = 7] = "RAINBOW";
    Variant[Variant["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";
})(Variant || (Variant = {}));

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
 */
function isFidelity(scheme) {
    return scheme.variant === Variant.FIDELITY ||
        scheme.variant === Variant.CONTENT;
}
function isMonochrome(scheme) {
    return scheme.variant === Variant.MONOCHROME;
}
function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
    let answer = tone;
    let closestToChroma = Hct.from(hue, chroma, tone);
    if (closestToChroma.chroma < chroma) {
        let chromaPeak = closestToChroma.chroma;
        while (closestToChroma.chroma < chroma) {
            answer += byDecreasingTone ? -1 : 1.0;
            const potentialSolution = Hct.from(hue, chroma, answer);
            if (chromaPeak > potentialSolution.chroma) {
                break;
            }
            if (Math.abs(potentialSolution.chroma - chroma) < 0.4) {
                break;
            }
            const potentialDelta = Math.abs(potentialSolution.chroma - chroma);
            const currentDelta = Math.abs(closestToChroma.chroma - chroma);
            if (potentialDelta < currentDelta) {
                closestToChroma = potentialSolution;
            }
            chromaPeak = Math.max(chromaPeak, potentialSolution.chroma);
        }
    }
    return answer;
}
/**
 * DynamicColors for the colors in the Material Design system.
 */
// Material Color Utilities namespaces the various utilities it provides.
// tslint:disable-next-line:class-as-namespace
class MaterialDynamicColors {
    static highestSurface(s) {
        return s.isDark ? MaterialDynamicColors.surfaceBright :
            MaterialDynamicColors.surfaceDim;
    }
}
MaterialDynamicColors.contentAccentToneDelta = 15.0;
MaterialDynamicColors.primaryPaletteKeyColor = DynamicColor.fromPalette({
    name: 'primary_palette_key_color',
    palette: (s) => s.primaryPalette,
    tone: (s) => s.primaryPalette.keyColor.tone,
});
MaterialDynamicColors.secondaryPaletteKeyColor = DynamicColor.fromPalette({
    name: 'secondary_palette_key_color',
    palette: (s) => s.secondaryPalette,
    tone: (s) => s.secondaryPalette.keyColor.tone,
});
MaterialDynamicColors.tertiaryPaletteKeyColor = DynamicColor.fromPalette({
    name: 'tertiary_palette_key_color',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => s.tertiaryPalette.keyColor.tone,
});
MaterialDynamicColors.neutralPaletteKeyColor = DynamicColor.fromPalette({
    name: 'neutral_palette_key_color',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.neutralPalette.keyColor.tone,
});
MaterialDynamicColors.neutralVariantPaletteKeyColor = DynamicColor.fromPalette({
    name: 'neutral_variant_palette_key_color',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.neutralVariantPalette.keyColor.tone,
});
MaterialDynamicColors.background = DynamicColor.fromPalette({
    name: 'background',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 6 : 98,
    isBackground: true,
});
MaterialDynamicColors.onBackground = DynamicColor.fromPalette({
    name: 'on_background',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 90 : 10,
    background: (s) => MaterialDynamicColors.background,
    contrastCurve: new ContrastCurve(3, 3, 4.5, 7),
});
MaterialDynamicColors.surface = DynamicColor.fromPalette({
    name: 'surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 6 : 98,
    isBackground: true,
});
MaterialDynamicColors.surfaceDim = DynamicColor.fromPalette({
    name: 'surface_dim',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 6 : new ContrastCurve(87, 87, 80, 75).get(s.contrastLevel),
    isBackground: true,
});
MaterialDynamicColors.surfaceBright = DynamicColor.fromPalette({
    name: 'surface_bright',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? new ContrastCurve(24, 24, 29, 34).get(s.contrastLevel) : 98,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerLowest = DynamicColor.fromPalette({
    name: 'surface_container_lowest',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? new ContrastCurve(4, 4, 2, 0).get(s.contrastLevel) : 100,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerLow = DynamicColor.fromPalette({
    name: 'surface_container_low',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ?
        new ContrastCurve(10, 10, 11, 12).get(s.contrastLevel) :
        new ContrastCurve(96, 96, 96, 95).get(s.contrastLevel),
    isBackground: true,
});
MaterialDynamicColors.surfaceContainer = DynamicColor.fromPalette({
    name: 'surface_container',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ?
        new ContrastCurve(12, 12, 16, 20).get(s.contrastLevel) :
        new ContrastCurve(94, 94, 92, 90).get(s.contrastLevel),
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerHigh = DynamicColor.fromPalette({
    name: 'surface_container_high',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ?
        new ContrastCurve(17, 17, 21, 25).get(s.contrastLevel) :
        new ContrastCurve(92, 92, 88, 85).get(s.contrastLevel),
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerHighest = DynamicColor.fromPalette({
    name: 'surface_container_highest',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ?
        new ContrastCurve(22, 22, 26, 30).get(s.contrastLevel) :
        new ContrastCurve(90, 90, 84, 80).get(s.contrastLevel),
    isBackground: true,
});
MaterialDynamicColors.onSurface = DynamicColor.fromPalette({
    name: 'on_surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 90 : 10,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.surfaceVariant = DynamicColor.fromPalette({
    name: 'surface_variant',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 30 : 90,
    isBackground: true,
});
MaterialDynamicColors.onSurfaceVariant = DynamicColor.fromPalette({
    name: 'on_surface_variant',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 80 : 30,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.inverseSurface = DynamicColor.fromPalette({
    name: 'inverse_surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 90 : 20,
});
MaterialDynamicColors.inverseOnSurface = DynamicColor.fromPalette({
    name: 'inverse_on_surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 20 : 95,
    background: (s) => MaterialDynamicColors.inverseSurface,
    contrastCurve: new ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.outline = DynamicColor.fromPalette({
    name: 'outline',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 60 : 50,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1.5, 3, 4.5, 7),
});
MaterialDynamicColors.outlineVariant = DynamicColor.fromPalette({
    name: 'outline_variant',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 30 : 80,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
});
MaterialDynamicColors.shadow = DynamicColor.fromPalette({
    name: 'shadow',
    palette: (s) => s.neutralPalette,
    tone: (s) => 0,
});
MaterialDynamicColors.scrim = DynamicColor.fromPalette({
    name: 'scrim',
    palette: (s) => s.neutralPalette,
    tone: (s) => 0,
});
MaterialDynamicColors.surfaceTint = DynamicColor.fromPalette({
    name: 'surface_tint',
    palette: (s) => s.primaryPalette,
    tone: (s) => s.isDark ? 80 : 40,
    isBackground: true,
});
MaterialDynamicColors.primary = DynamicColor.fromPalette({
    name: 'primary',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 100 : 0;
        }
        return s.isDark ? 80 : 40;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 10, 'nearer', false),
});
MaterialDynamicColors.onPrimary = DynamicColor.fromPalette({
    name: 'on_primary',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 10 : 90;
        }
        return s.isDark ? 20 : 100;
    },
    background: (s) => MaterialDynamicColors.primary,
    contrastCurve: new ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.primaryContainer = DynamicColor.fromPalette({
    name: 'primary_container',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isFidelity(s)) {
            return s.sourceColorHct.tone;
        }
        if (isMonochrome(s)) {
            return s.isDark ? 85 : 25;
        }
        return s.isDark ? 30 : 90;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 10, 'nearer', false),
});
MaterialDynamicColors.onPrimaryContainer = DynamicColor.fromPalette({
    name: 'on_primary_container',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isFidelity(s)) {
            return DynamicColor.foregroundTone(MaterialDynamicColors.primaryContainer.tone(s), 4.5);
        }
        if (isMonochrome(s)) {
            return s.isDark ? 0 : 100;
        }
        return s.isDark ? 90 : 30;
    },
    background: (s) => MaterialDynamicColors.primaryContainer,
    contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.inversePrimary = DynamicColor.fromPalette({
    name: 'inverse_primary',
    palette: (s) => s.primaryPalette,
    tone: (s) => s.isDark ? 40 : 80,
    background: (s) => MaterialDynamicColors.inverseSurface,
    contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
});
MaterialDynamicColors.secondary = DynamicColor.fromPalette({
    name: 'secondary',
    palette: (s) => s.secondaryPalette,
    tone: (s) => s.isDark ? 80 : 40,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 10, 'nearer', false),
});
MaterialDynamicColors.onSecondary = DynamicColor.fromPalette({
    name: 'on_secondary',
    palette: (s) => s.secondaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 10 : 100;
        }
        else {
            return s.isDark ? 20 : 100;
        }
    },
    background: (s) => MaterialDynamicColors.secondary,
    contrastCurve: new ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.secondaryContainer = DynamicColor.fromPalette({
    name: 'secondary_container',
    palette: (s) => s.secondaryPalette,
    tone: (s) => {
        const initialTone = s.isDark ? 30 : 90;
        if (isMonochrome(s)) {
            return s.isDark ? 30 : 85;
        }
        if (!isFidelity(s)) {
            return initialTone;
        }
        return findDesiredChromaByTone(s.secondaryPalette.hue, s.secondaryPalette.chroma, initialTone, s.isDark ? false : true);
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 10, 'nearer', false),
});
MaterialDynamicColors.onSecondaryContainer = DynamicColor.fromPalette({
    name: 'on_secondary_container',
    palette: (s) => s.secondaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 90 : 10;
        }
        if (!isFidelity(s)) {
            return s.isDark ? 90 : 30;
        }
        return DynamicColor.foregroundTone(MaterialDynamicColors.secondaryContainer.tone(s), 4.5);
    },
    background: (s) => MaterialDynamicColors.secondaryContainer,
    contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.tertiary = DynamicColor.fromPalette({
    name: 'tertiary',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 90 : 25;
        }
        return s.isDark ? 80 : 40;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 10, 'nearer', false),
});
MaterialDynamicColors.onTertiary = DynamicColor.fromPalette({
    name: 'on_tertiary',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 10 : 90;
        }
        return s.isDark ? 20 : 100;
    },
    background: (s) => MaterialDynamicColors.tertiary,
    contrastCurve: new ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.tertiaryContainer = DynamicColor.fromPalette({
    name: 'tertiary_container',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 60 : 49;
        }
        if (!isFidelity(s)) {
            return s.isDark ? 30 : 90;
        }
        const proposedHct = s.tertiaryPalette.getHct(s.sourceColorHct.tone);
        return DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 10, 'nearer', false),
});
MaterialDynamicColors.onTertiaryContainer = DynamicColor.fromPalette({
    name: 'on_tertiary_container',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 0 : 100;
        }
        if (!isFidelity(s)) {
            return s.isDark ? 90 : 30;
        }
        return DynamicColor.foregroundTone(MaterialDynamicColors.tertiaryContainer.tone(s), 4.5);
    },
    background: (s) => MaterialDynamicColors.tertiaryContainer,
    contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.error = DynamicColor.fromPalette({
    name: 'error',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 80 : 40,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 10, 'nearer', false),
});
MaterialDynamicColors.onError = DynamicColor.fromPalette({
    name: 'on_error',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 20 : 100,
    background: (s) => MaterialDynamicColors.error,
    contrastCurve: new ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.errorContainer = DynamicColor.fromPalette({
    name: 'error_container',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 30 : 90,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 10, 'nearer', false),
});
MaterialDynamicColors.onErrorContainer = DynamicColor.fromPalette({
    name: 'on_error_container',
    palette: (s) => s.errorPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 90 : 10;
        }
        return s.isDark ? 90 : 30;
    },
    background: (s) => MaterialDynamicColors.errorContainer,
    contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.primaryFixed = DynamicColor.fromPalette({
    name: 'primary_fixed',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 40.0 : 90.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.primaryFixedDim = DynamicColor.fromPalette({
    name: 'primary_fixed_dim',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 30.0 : 80.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.onPrimaryFixed = DynamicColor.fromPalette({
    name: 'on_primary_fixed',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 100.0 : 10.0,
    background: (s) => MaterialDynamicColors.primaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.primaryFixed,
    contrastCurve: new ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.onPrimaryFixedVariant = DynamicColor.fromPalette({
    name: 'on_primary_fixed_variant',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 90.0 : 30.0,
    background: (s) => MaterialDynamicColors.primaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.primaryFixed,
    contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.secondaryFixed = DynamicColor.fromPalette({
    name: 'secondary_fixed',
    palette: (s) => s.secondaryPalette,
    tone: (s) => isMonochrome(s) ? 80.0 : 90.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.secondaryFixedDim = DynamicColor.fromPalette({
    name: 'secondary_fixed_dim',
    palette: (s) => s.secondaryPalette,
    tone: (s) => isMonochrome(s) ? 70.0 : 80.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.onSecondaryFixed = DynamicColor.fromPalette({
    name: 'on_secondary_fixed',
    palette: (s) => s.secondaryPalette,
    tone: (s) => 10.0,
    background: (s) => MaterialDynamicColors.secondaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
    contrastCurve: new ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.onSecondaryFixedVariant = DynamicColor.fromPalette({
    name: 'on_secondary_fixed_variant',
    palette: (s) => s.secondaryPalette,
    tone: (s) => isMonochrome(s) ? 25.0 : 30.0,
    background: (s) => MaterialDynamicColors.secondaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
    contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.tertiaryFixed = DynamicColor.fromPalette({
    name: 'tertiary_fixed',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 40.0 : 90.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.tertiaryFixedDim = DynamicColor.fromPalette({
    name: 'tertiary_fixed_dim',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 30.0 : 80.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
    toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.onTertiaryFixed = DynamicColor.fromPalette({
    name: 'on_tertiary_fixed',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 100.0 : 10.0,
    background: (s) => MaterialDynamicColors.tertiaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
    contrastCurve: new ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.onTertiaryFixedVariant = DynamicColor.fromPalette({
    name: 'on_tertiary_fixed_variant',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 90.0 : 30.0,
    background: (s) => MaterialDynamicColors.tertiaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
    contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
});

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
 */
/**
 * An intermediate concept between the key color for a UI theme, and a full
 * color scheme. 5 sets of tones are generated, all except one use the same hue
 * as the key color, and all vary in chroma.
 */
class CorePalette {
    /**
     * @param argb ARGB representation of a color
     */
    static of(argb) {
        return new CorePalette(argb, false);
    }
    /**
     * @param argb ARGB representation of a color
     */
    static contentOf(argb) {
        return new CorePalette(argb, true);
    }
    /**
     * Create a [CorePalette] from a set of colors
     */
    static fromColors(colors) {
        return CorePalette.createPaletteFromColors(false, colors);
    }
    /**
     * Create a content [CorePalette] from a set of colors
     */
    static contentFromColors(colors) {
        return CorePalette.createPaletteFromColors(true, colors);
    }
    static createPaletteFromColors(content, colors) {
        const palette = new CorePalette(colors.primary, content);
        if (colors.secondary) {
            const p = new CorePalette(colors.secondary, content);
            palette.a2 = p.a1;
        }
        if (colors.tertiary) {
            const p = new CorePalette(colors.tertiary, content);
            palette.a3 = p.a1;
        }
        if (colors.error) {
            const p = new CorePalette(colors.error, content);
            palette.error = p.a1;
        }
        if (colors.neutral) {
            const p = new CorePalette(colors.neutral, content);
            palette.n1 = p.n1;
        }
        if (colors.neutralVariant) {
            const p = new CorePalette(colors.neutralVariant, content);
            palette.n2 = p.n2;
        }
        return palette;
    }
    constructor(argb, isContent) {
        const hct = Hct.fromInt(argb);
        const hue = hct.hue;
        const chroma = hct.chroma;
        if (isContent) {
            this.a1 = TonalPalette.fromHueAndChroma(hue, chroma);
            this.a2 = TonalPalette.fromHueAndChroma(hue, chroma / 3);
            this.a3 = TonalPalette.fromHueAndChroma(hue + 60, chroma / 2);
            this.n1 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 12, 4));
            this.n2 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 6, 8));
        }
        else {
            this.a1 = TonalPalette.fromHueAndChroma(hue, Math.max(48, chroma));
            this.a2 = TonalPalette.fromHueAndChroma(hue, 16);
            this.a3 = TonalPalette.fromHueAndChroma(hue + 60, 24);
            this.n1 = TonalPalette.fromHueAndChroma(hue, 4);
            this.n2 = TonalPalette.fromHueAndChroma(hue, 8);
        }
        this.error = TonalPalette.fromHueAndChroma(25, 84);
    }
}

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
 */
/**
 * @param hex String representing color as hex code. Accepts strings with or
 *     without leading #, and string representing the color using 3, 6, or 8
 *     hex characters.
 * @return ARGB representation of color.
 */
function argbFromHex(hex) {
    hex = hex.replace('#', '');
    const isThree = hex.length === 3;
    const isSix = hex.length === 6;
    const isEight = hex.length === 8;
    if (!isThree && !isSix && !isEight) {
        throw new Error('unexpected hex ' + hex);
    }
    let r = 0;
    let g = 0;
    let b = 0;
    if (isThree) {
        r = parseIntHex(hex.slice(0, 1).repeat(2));
        g = parseIntHex(hex.slice(1, 2).repeat(2));
        b = parseIntHex(hex.slice(2, 3).repeat(2));
    }
    else if (isSix) {
        r = parseIntHex(hex.slice(0, 2));
        g = parseIntHex(hex.slice(2, 4));
        b = parseIntHex(hex.slice(4, 6));
    }
    else if (isEight) {
        r = parseIntHex(hex.slice(2, 4));
        g = parseIntHex(hex.slice(4, 6));
        b = parseIntHex(hex.slice(6, 8));
    }
    return (((255 << 24) | ((r & 0x0ff) << 16) | ((g & 0x0ff) << 8) | (b & 0x0ff)) >>>
        0);
}
function parseIntHex(value) {
    // tslint:disable-next-line:ban
    return parseInt(value, 16);
}

const tones = {
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
const rgbFromArgb = (argb) => {
  const rgba = rgbaFromArgb(argb);
  return [rgba.r, rgba.g, rgba.b];
};
const isKeyColor = (k) => {
  return {
    primary: true,
    secondary: true,
    tertiary: true,
    error: true,
    warning: true,
    success: true
  }[k];
};
class Palette {
  constructor(seeds) {
    this.seeds = seeds;
  }
  static toHEX = (n) => {
    return `#${rgbFromArgb(n).map((v) => padStart(v.toString(16), 2, "0")).join("")}`;
  };
  static createRoleColorRuleBuilder(mode) {
    const rules = {};
    const x = new Proxy(
      {},
      {
        get(_, prop) {
          if (prop == "build") {
            return () => rules;
          }
          return (role, rule) => {
            rules[`${role}${mode ? `:${mode}` : ""}`] = rule;
            return x;
          };
        }
      }
    );
    return x;
  }
  static createRoleColorSourcePicker() {
    return new Proxy(
      {},
      {
        get(_, prop) {
          return (tone) => [prop, tone];
        }
      }
    );
  }
  static fromColors = (colors) => {
    const {
      primary,
      secondary,
      tertiary,
      neutral,
      neutralVariant,
      error,
      ...otherColors
    } = colors;
    const palette = CorePalette.contentFromColors({
      primary: argbFromHex(primary),
      secondary: secondary ? argbFromHex(secondary) : void 0,
      tertiary: tertiary ? argbFromHex(tertiary) : void 0,
      error: error ? argbFromHex(error) : void 0
    });
    if (neutral) {
      palette.n1 = TonalPalette.fromHueAndChroma(argbFromHex(neutral), 4);
    }
    if (neutralVariant) {
      palette.n2 = TonalPalette.fromHueAndChroma(
        argbFromHex(neutralVariant),
        8
      );
    }
    return new Palette({
      primary: palette.a1,
      secondary: palette.a2,
      tertiary: palette.a3,
      neutral: palette.n1,
      neutralVariant: palette.n2,
      error: palette.error,
      ...mapValues(
        otherColors,
        (v) => TonalPalette.fromInt(argbFromHex(v))
      )
    });
  };
  normalizeRoleRules(rules = {}) {
    const seed = Palette.createRoleColorSourcePicker();
    let defaultRoleRules = Palette.createRoleColorRuleBuilder().rule("shadow", seed.neutral(0)).rule("scrim", seed.neutral(0)).rule("outline", seed.neutralVariant(87)).rule("outline-variant", seed.neutralVariant(80)).rule("surface", seed.neutral(99)).rule("on-surface", seed.neutral(10)).rule("surface-variant", seed.neutralVariant(90)).rule("on-surface-variant", seed.neutralVariant(30)).rule("surface-dim", seed.neutral(87)).rule("surface-bright", seed.neutral(98)).rule("surface-container-lowest", seed.neutral(100)).rule("surface-container-low", seed.neutral(96)).rule("surface-container", seed.neutral(94)).rule("surface-container-high", seed.neutral(92)).rule("surface-container-highest", seed.neutral(90)).rule("inverse-surface", seed.neutral(20)).rule("inverse-on-surface", seed.neutral(95)).rule("inverse-primary", seed.primary(80));
    let darkRoleRules = Palette.createRoleColorRuleBuilder("dark").rule("shadow", seed.neutral(0)).rule("scrim", seed.neutral(0)).rule("outline", seed.neutralVariant(60)).rule("outline-variant", seed.neutralVariant(30)).rule("surface", seed.neutral(10)).rule("on-surface", seed.neutral(90)).rule("surface-variant", seed.neutralVariant(30)).rule("on-surface-variant", seed.neutralVariant(80)).rule("surface-dim", seed.neutral(6)).rule("surface-bright", seed.neutral(24)).rule("surface-container-lowest", seed.neutral(4)).rule("surface-container-low", seed.neutral(10)).rule("surface-container", seed.neutral(12)).rule("surface-container-high", seed.neutral(17)).rule("surface-container-highest", seed.neutral(22)).rule("inverse-surface", seed.neutral(90)).rule("inverse-on-surface", seed.neutral(20)).rule("inverse-primary", seed.primary(40));
    for (const name in this.seeds) {
      if (name.startsWith("neutral")) {
        continue;
      }
      defaultRoleRules = defaultRoleRules.rule(name, seed[name](40)).rule(`on-${name}`, seed[name](100)).rule(`${name}-container`, seed[name](90)).rule(`on-${name}-container`, seed[name](10));
      darkRoleRules = darkRoleRules.rule(name, seed[name](80)).rule(`on-${name}`, seed[name](20)).rule(`${name}-container`, seed[name](30)).rule(`on-${name}-container`, seed[name](90));
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
    for (const [role, [base, tone]] of Object.entries(roleRules)) {
      if (this.seeds[base]) {
        if (role.endsWith(":dark")) {
          let r = role.split(":")[0];
          darkThemeColors[r] = tones[tone] ? `${String(base)}.${tone}` : this.seeds[base]?.tone(tone);
          continue;
        }
        themeColors[role] = tones[tone] ? `${String(base)}.${tone}` : this.seeds[base]?.tone(tone);
      }
    }
    return [themeColors, darkThemeColors];
  }
  toDesignTokens(rules = {}) {
    const finalRules = this.normalizeRoleRules(rules);
    const [themeColors, dartThemeColors] = this.getThemeRoleColors(finalRules);
    const sysColors = {};
    const containerStyles = {};
    for (const role in themeColors) {
      sysColors[`${role}`] = {
        _default: isNumber(themeColors[role]) ? rgbFromArgb(themeColors[role]) : themeColors[role],
        _dark: isNumber(dartThemeColors[role]) ? rgbFromArgb(dartThemeColors[role]) : dartThemeColors[role]
      };
      if (isKeyColor(role)) {
        containerStyles[`${role}`] = DesignToken.mixin({
          bgColor: `sys.${role}`,
          color: `sys.on-${role}`
        });
        containerStyles[`${role}-container`] = DesignToken.mixin({
          bgColor: `sys.${role}-container`,
          color: `sys.on-${role}-container`
        });
      }
      if (role.startsWith("surface")) {
        if (role.includes("container")) {
          containerStyles[`${role}`] = DesignToken.mixin({
            bgColor: `sys.${role}`,
            color: "sys.on-surface"
          });
          continue;
        }
        containerStyles[`${role}`] = DesignToken.mixin({
          bgColor: `sys.${role}`,
          color: "sys.on-surface"
        });
        containerStyles[`on-${role}`] = DesignToken.mixin({
          bgColor: `sys.on-${role}`,
          color: "sys.inverse-on-surface"
        });
      }
    }
    const toTonalPalette = (t) => {
      return Object.keys(tones).reduce(
        (ret, tone) => Object.assign(ret, {
          [tone]: rgbFromArgb(t.tone(parseInt(tone)))
        }),
        {}
      );
    };
    const color = DesignToken.color({
      ...mapValues(
        this.seeds,
        (tp) => toTonalPalette(tp)
      ),
      white: [255, 255, 255],
      black: [0, 0, 0],
      sys: sysColors
    });
    const containerStyle = DesignToken.customMixin("containerStyle", {
      sys: containerStyles
    });
    return {
      color,
      containerStyle
    };
  }
}

const rounded = DesignToken.rounded({
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 28
});

const typography = {
  font: DesignToken.font({
    brand: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    plain: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    code: [
      `'Lucida Console'`,
      "Consolas",
      "Monaco",
      `'Andale Mono'`,
      `'Ubuntu Mono'`,
      "monospace"
    ].join(",")
  }),
  fontWeight: DesignToken.fontWeight({
    regular: 400,
    medium: 500,
    bold: 700
  }),
  textStyle: DesignToken.customMixin("textStyle", {
    sys: {
      "display-large": DesignToken.mixin({
        lineHeight: 64,
        fontSize: 57,
        letterSpacing: -0.25,
        fontWeight: "regular",
        font: "brand"
      }),
      "display-medium": DesignToken.mixin({
        lineHeight: 52,
        fontSize: 45,
        letterSpacing: 0,
        fontWeight: "regular",
        font: "brand"
      }),
      "display-small": DesignToken.mixin({
        lineHeight: 44,
        fontSize: 36,
        letterSpacing: 0,
        fontWeight: "regular",
        font: "brand"
      }),
      "headline-large": DesignToken.mixin({
        lineHeight: 40,
        fontSize: 32,
        letterSpacing: 0,
        fontWeight: "regular",
        font: "brand"
      }),
      "headline-medium": DesignToken.mixin({
        lineHeight: 36,
        fontSize: 28,
        letterSpacing: 0,
        fontWeight: "regular",
        font: "brand"
      }),
      "headline-small": DesignToken.mixin({
        lineHeight: 32,
        fontSize: 24,
        letterSpacing: 0,
        fontWeight: "regular",
        font: "plain"
      }),
      "title-large": DesignToken.mixin({
        lineHeight: 28,
        fontSize: 22,
        letterSpacing: 0,
        fontWeight: "regular",
        font: "brand"
      }),
      "title-medium": DesignToken.mixin({
        lineHeight: 24,
        fontSize: 16,
        letterSpacing: 0.15,
        fontWeight: "medium",
        font: "plain"
      }),
      "title-small": DesignToken.mixin({
        lineHeight: 20,
        fontSize: 14,
        letterSpacing: 0.1,
        fontWeight: "medium",
        font: "plain"
      }),
      "label-large": DesignToken.mixin({
        lineHeight: 20,
        fontSize: 14,
        letterSpacing: 0.1,
        fontWeight: "medium",
        font: "plain"
      }),
      "label-medium": DesignToken.mixin({
        lineHeight: 16,
        fontSize: 12,
        letterSpacing: 0.5,
        fontWeight: "medium",
        font: "plain"
      }),
      "label-small": DesignToken.mixin({
        lineHeight: 16,
        fontSize: 11,
        letterSpacing: 0.5,
        fontWeight: "medium",
        font: "plain"
      }),
      "body-large": DesignToken.mixin({
        lineHeight: 24,
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: "regular",
        font: "plain"
      }),
      "body-medium": DesignToken.mixin({
        lineHeight: 20,
        fontSize: 14,
        letterSpacing: 0.25,
        fontWeight: "regular",
        font: "plain"
      }),
      "body-small": DesignToken.mixin({
        lineHeight: 16,
        fontSize: 12,
        letterSpacing: 0.4,
        fontWeight: "regular",
        font: "plain"
      })
    }
  })
};

const seedColors = Palette.fromColors({
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

const defaultTheming = Theming.create(defaultTheme, { varPrefix: "vk" });

const ThemeProvider = createProvider(() => defaultTheming, {
  name: "Theme"
});

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here


  return undefined;
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;

      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';
	var length = sizeof(children);

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: element.value = element.props.join(',');
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

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
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return WEBKIT + value + MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);

    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }

      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var isBrowser = true;
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};

const CacheProvider = createProvider(() => createCache({
  key: "css"
}), {
  name: "Cache"
});

const useInsertStyles = (cache) => {
  return (props) => {
    if (!props.serialized) {
      return;
    }
    if (props.withoutScoping) {
      cache.insert("", props.serialized, cache.sheet, true);
    } else {
      insertStyles(cache, props.serialized, props.isStringTag ?? true);
    }
  };
};

const Box = component({
  sx: custom(),
  component: custom().optional().default("div")
}, (props, { slots, expose }) => {
  const theme = ThemeProvider.use();
  const cache = CacheProvider.use();
  const serialized = theme.unstable_css(cache, props.sx ?? {});
  const className = () => {
    return serialized.name !== "0" ? `${cache.key}-${serialized.name}` : "";
  };
  const insertStyle = useInsertStyles(cache);
  onMounted(() => {
    insertStyle({
      serialized,
      isStringTag: true
    });
  });
  const forwardRef = ref(null);
  expose({
    [SymbolForwardRef]: forwardRef
  });
  return () => {
    const Component = props.component ?? "div";
    return /* @__PURE__ */ jsx(Component, { ref: forwardRef, class: className(), children: slots });
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
    if (isString$1(arg) || isComponent(arg)) {
      defaultComponent = arg;
      continue;
    }
    if (isUndefined(finalSetup) && isPropTypes(arg)) {
      finalPropTypes = arg;
    } else {
      finalOptions = arg;
    }
  }
  finalSetup ??= (props, ctx) => (Wrap) => {
    const dataProps = {};
    for (const prop in props) {
      if (prop === "component" || prop === "sx") {
        continue;
      }
      if (props[prop]) {
        dataProps[`data-${prop}`] = props[prop];
      }
    }
    return /* @__PURE__ */ jsx(Wrap, { ...dataProps, children: ctx.slots });
  };
  return (presetSx) => {
    const c = Object.assign(component({
      ...finalPropTypes,
      sx: custom().optional(),
      component: custom().optional()
    }, (props, ctx) => {
      const theme = ThemeProvider.use();
      const cache = CacheProvider.use();
      const insertCSS = useInsertStyles(cache);
      const sxClassNameRef = ref("");
      const presetSxSerialized = theme.unstable_css(cache, presetSx);
      const className = () => {
        return (presetSxSerialized.name !== "0" ? `${cache.key}-${presetSxSerialized.name}${sxClassNameRef.value}` : `${sxClassNameRef.value}`) + (c.name ? ` ${c.name}` : "");
      };
      if (defaultComponent.__styled) {
        const serialized = theme.unstable_css(cache, props.sx ?? {});
        if (serialized.name !== "0") {
          sxClassNameRef.value = ` ${cache.key}-${serialized.name}`;
        }
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
      } else {
        onBeforeMount(() => {
          insertCSS({
            serialized: presetSxSerialized,
            isStringTag: true
          });
        });
      }
      const render = finalSetup(props, ctx);
      const forwardRef = ref(null);
      ctx.expose({
        [SymbolForwardRef]: forwardRef
      });
      return () => {
        if (defaultComponent.__styled) {
          const ret2 = render(defaultComponent);
          if (ret2) {
            return cloneVNode(ret2, {
              component: props.component,
              ref: forwardRef,
              class: className()
            });
          }
          return null;
        }
        const ret = render(Box);
        if (ret) {
          return cloneVNode(ret, {
            component: props.component || defaultComponent,
            sx: props.sx,
            ref: forwardRef,
            class: className()
          });
        }
        return null;
      };
    }, finalOptions), {
      __styled: true
    });
    c.toString = () => {
      return `.${c.name}`;
    };
    return c;
  };
}

const GlobalStyle = component(({ styles }) => {
  const theme = ThemeProvider.use();
  const cache = CacheProvider.use();
  const insert = useInsertStyles(cache);
  const serialized = theme.unstable_css(cache, isString$1(styles) ? {
    "&": styles
  } : styles);
  onBeforeMount(() => {
    insert({
      serialized,
      withoutScoping: true
    });
  });
  return () => null;
});

const CSSReset = component(() => {
  const theme = ThemeProvider.use();
  const rootVars = theme.rootCSSVars;
  return () => {
    return /* @__PURE__ */ jsx(GlobalStyle, { styles: {
      ":host, :root, [data-theme]": rootVars,
      "*, *::after, *::before": {
        boxSizing: "border-box"
      },
      html: {
        fontSize: "10px"
      },
      a: {
        color: "inherit"
      },
      body: {
        textStyle: "sys.body-medium"
      }
    } });
  };
});

const OverlaySettingProvider = createProvider(() => {
  return {
    mountPoint: () => document.body
  };
}, {
  name: "OverlaySetting"
});
const OverlayProvider = createProvider(() => {
  return new OverlayContext(ref$1(null), ref$1(null), () => false);
}, {
  name: "Overlay"
});
class OverlayContext {
  constructor(triggerRef, contentRef, isOpen) {
    this.triggerRef = triggerRef;
    this.contentRef = contentRef;
    this.isOpen = isOpen;
  }
  children = [];
  add = (p) => {
    this.children = [
      ...this.children,
      p
    ];
    return () => {
      this.children = this.children.filter((c) => c !== p);
    };
  };
  isClickInside = (event) => {
    for (const child of this.children) {
      if (child.isClickInside(event)) {
        return true;
      }
    }
    const triggerEl = unref(this.triggerRef);
    const contentEl = unref(this.contentRef);
    return triggerEl && (triggerEl === event.target || event.composedPath().includes(triggerEl)) || contentEl && (contentEl === event.target || event.composedPath().includes(contentEl));
  };
  topmost() {
    return this.children.filter((c) => c.isOpen()).length === 0;
  }
}
const Overlay = component((props, { slots, attrs, emit }) => {
  const contentRef = props.contentRef || ref$1(null);
  const popperContext = new OverlayContext(props.triggerRef ?? ref$1(null), contentRef, () => !!props.isOpen);
  const setting = OverlaySettingProvider.use();
  const parent = OverlayProvider.use();
  onBeforeUnmount(parent.add(popperContext));
  if (window) {
    rx(toObservable(contentRef, "value"), tapEffect((contentEl) => {
      if (!contentEl) {
        return;
      }
      const handleClickOutside = (event) => {
        if (popperContext.isClickInside(event)) {
          return;
        }
        emit("click-outside", event);
      };
      window.addEventListener("pointerdown", handleClickOutside);
      return () => {
        window.removeEventListener("pointerdown", handleClickOutside);
      };
    }), tapEffect((contentEl) => {
      if (!contentEl) {
        return;
      }
      const handleEscKeydown = (event) => {
        if (event.key === "Escape" && popperContext.topmost()) {
          emit("esc-keydown", event);
        }
      };
      window.addEventListener("keydown", handleEscKeydown);
      return () => {
        window.removeEventListener("keydown", handleEscKeydown);
      };
    }), subscribeUntilUnmount());
  }
  return () => {
    const content = props.isOpen ? cloneVNode(/* @__PURE__ */ jsx("div", { ...attrs, ref: contentRef, style: props.style, children: /* @__PURE__ */ jsx(OverlayProvider, { value: popperContext, children: slots.default?.() }) }), {
      onVnodeBeforeMount: () => {
        emit("content-before-mount");
      }
    }) : null;
    return /* @__PURE__ */ jsx(Teleport, { to: setting.mountPoint(), children: slots.transition ? slots.transition({
      content
    }) : content });
  };
}, {
  name: "Overlay",
  inheritAttrs: false
});

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
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
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
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
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
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
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
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

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
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

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
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

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [':popover-open', ':modal'].some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function getCssDimensions(element) {
  const css = getComputedStyle(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
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
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 :
  // RTL <body> scrollbar.
  getWindowScrollBarX(documentElement, htmlRect));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
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
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
      // Firefox with layout.scrollbar.side = 3 in about:config to test this.
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle(element).direction === 'rtl';
}

const platform = {
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

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = shift$1;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = flip$1;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = size$1;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
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

const Popper = component((props, { slots, emit, attrs }) => {
  const triggerRef = observableRef(null);
  const contentRef = observableRef(null);
  rx(combineLatest([
    triggerRef,
    contentRef
  ]), tapEffect(([triggerEf, contentEl]) => {
    if (contentEl && triggerEf) {
      const updatePosition = async () => {
        contentEl.style.position = "absolute";
        const { x, y } = await computePosition(triggerEf, contentEl, {
          placement: props.placement ?? "bottom",
          middleware: [
            ...props.modifiers ?? [],
            ...props.middleware ?? [],
            flip(),
            shift()
          ]
        });
        Object.assign(contentEl.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      };
      const clean = autoUpdate(triggerEf, contentEl, updatePosition);
      return () => {
        clean();
      };
    }
    return () => {
    };
  }), subscribeUntilUnmount());
  return () => {
    const trigger = slots.default?.()[0];
    if (!trigger) {
      return null;
    }
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      cloneVNode(trigger, {
        ...attrs,
        onVnodeMounted: (n) => {
          triggerRef.value = resolveElement(n.el);
        }
      }),
      /* @__PURE__ */ jsx(Overlay, { triggerRef, contentRef, isOpen: props.isOpen, onClickOutside: (event) => emit("click-outside", event), style: {
        zIndex: 100
      }, $transition: slots.transition, children: slots.content?.() })
    ] });
  };
}, {
  name: "Popper",
  inheritAttrs: false
});
function resolveElement(el) {
  if (el) {
    if (el instanceof HTMLElement) {
      return el;
    }
    if (el instanceof Text) {
      return resolveElement(el.nextElementSibling);
    }
  }
  return null;
}

export { Box as B, CacheProvider as C, GlobalStyle as G, Overlay as O, Popper as P, ThemeProvider as T, size as a, alpha as b, CSSReset as c, defineTransition as d, Theming as e, Palette as f, defaultTheme as g, styled as s, transition as t, variant as v };
