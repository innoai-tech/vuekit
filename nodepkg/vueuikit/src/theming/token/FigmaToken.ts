import {
  get,
  has,
  isPlainObject,
  isString,
  last,
  mapValues,
  pickBy,
  some,
} from "es-toolkit/compat";
import { DesignToken } from "./DesignToken";
import { setTo } from "./util.ts";
import { parseToRgb as polishedParseToRgb } from "polished";

export type FigmaToken = {
  $type: string;
  $value: any;
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
      setTo(target, ["color", "sys", last(path)!, "_default"], processValue(v));
      return;
    }
    setTo(target, path, processValue(v));
  });

  walkFigmaTokens(darkTokens, (v: any, path: string[]) => {
    if (path[0] === "color" && path[1] === "sys") {
      setTo(target, ["color", "sys", last(path)!, "_dark"], processValue(v));
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
    if (v.includes("* {seed.space.dp}")) {
      return parseFloat(v.replaceAll("* {seed.space.dp}", ""));
    }

    if (v.startsWith("rgb") || v.startsWith("#")) {
      return parseToRgb(v);
    }

    return v.replace(/\{([^}]+)}/g, (v) => {
      let scopeAndKey = v.slice(1, v.length - 1);

      if (scopeAndKey.startsWith("seed.")) {
        scopeAndKey = scopeAndKey.slice("seed.".length);
      }

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
  const rgb = polishedParseToRgb(color);
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  return [rgb.red, rgb.green, rgb.blue];
}

function walkFigmaTokens(tokens: FigmaTokenValues[], cb: (value: any, path: string[]) => void) {
  for (const token of tokens) {
    walkValue(token, cb);
  }
}

function walkValue(o: any, cb: (v: any, path: any[]) => void, parent: any[] = []) {
  for (const k in o) {
    const v = o[k] as any;

    if (isPlainObject(v)) {
      if (has(v, "$type")) {
        cb(v["$value"], [...parent, k]);
        continue;
      }
      walkValue(v, cb, [...parent, k]);
      continue;
    }
    cb(v, [...parent, k]);
  }
}

const groups = {
  primary: ["primary"],
  secondary: ["secondary"],
  tertiary: ["tertiary"],
  error: ["error"],
  warning: ["warning"],
  success: ["success"],
  neutral: ["surface", "outline"],
};

export const groupSysColors = (figmaTokensValues: FigmaTokenValues) => {
  const sysColors = get(figmaTokensValues, ["color", "sys"], {});

  return {
    ...figmaTokensValues,
    color: {
      sys: mapValues(groups, (matches) => {
        return pickBy(sysColors, (_, token) => some(matches, (m) => token.indexOf(m) > -1));
      }),
    },
  };
};
