import {
	has,
	isPlainObject,
	isString,
	mapValues,
} from "@innoai-tech/lodash";
import { DesignToken } from "./DesignToken";
import { setTo } from "./util.ts";

export type FigmaToken = {
	type: string;
	value: any;
};

export type FigmaTokenValues<T = FigmaToken> = {
	[K: string]: FigmaToken | FigmaTokenValues<T>;
};

export function themeFromFigmaTokens(
	defaultTokens: FigmaTokenValues[],
	darkTokens: FigmaTokenValues[],
) {
	const target: Record<string, any> = {};

	walkFigmaTokens(defaultTokens, (v: any, path: string[]) => {
		if (path[0] === "color" && path[1] === "sys") {
			setTo(target, [...path, "_default"], processValue(v));
			return;
		}
		setTo(target, path, processValue(v));
	});

	walkFigmaTokens(darkTokens, (v: any, path: string[]) => {
		if (path[0] === "color" && path[1] === "sys") {
			setTo(target, [...path, "_dark"], processValue(v));
			return;
		}
		setTo(target, path, processValue(v));
	});

	const tokens: Record<string, DesignToken> = {};

	for (const topic in target) {
		switch (topic) {
			case "fontWeight":
				tokens[topic] = DesignToken.fontWeight(target[topic]);
				break;
			case "font":
				tokens[topic] = DesignToken.font(target[topic]);
				break;
			case "shadow":
				tokens[topic] = DesignToken.shadow(target[topic]);
				break;
			case "rounded":
				tokens[topic] = DesignToken.rounded(target[topic]);
				break;
			case "color":
				tokens[topic] = DesignToken.color(target[topic]);
				break;
			case "textStyle":
				tokens[topic] = DesignToken.customMixin("textStyle", target[topic]);
				break;
		}
	}

	return tokens;
}

function processValue(v: any): any {
	if (isPlainObject(v)) {
		return DesignToken.mixin(mapValues(v, (subV) => processValue(subV)));
	}

	if (isString(v)) {
		if (v.includes("* {space.dp}")) {
			return parseFloat(v.replaceAll("* {space.dp}", ""));
		}

		if (v.startsWith("rgb")) {
			return parseToRgb(v);
		}

		return v.replace(/\{([^}]+)}/g, (v) => {
			const scopeAndKey = v.slice(1, v.length - 1);
			const [_, ...key] = scopeAndKey.split(".");
			if (key.length) {
				return key.join(".");
			}
			return v;
		});
	}
	return v;
}

function parseToRgb(color: string) {
	const m = [...color.matchAll(/rgb\(([0-9]+), ?([0-9]+), ?([0-9]+)\)/g)][0];

	if (!m) {
		throw new Error(`invalid color: ${color}`);
	}

	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	return [parseInt(m[1]!), parseInt(m[2]!), parseInt(m[3]!)];
}

function walkFigmaTokens(
	tokens: FigmaTokenValues[],
	cb: (value: any, path: string[]) => void,
) {
	for (const token of tokens) {
		walkValue(token, cb);
	}
}

function walkValue(
	o: any,
	cb: (v: any, path: any[]) => void,
	parent: any[] = [],
) {
	for (const k in o) {
		const v = o[k] as any;

		if (isPlainObject(v)) {
			if (has(v, "type")) {
				cb(v.value, [...parent, k]);
				continue;
			}
			walkValue(v, cb, [...parent, k]);
			continue;
		}
		cb(v, [...parent, k]);
	}
}
