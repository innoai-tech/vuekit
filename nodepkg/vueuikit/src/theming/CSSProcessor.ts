import {
  get,
  isEmpty,
  isPlainObject,
  kebabCase,
  last,
  set,
} from "@innoai-tech/lodash";
import {
  aliases,
  extensions,
  getSupportedPseudoClasses,
  pseudoSelectors,
} from "./csstype";

export interface Mixin {
  get(token: string): {} | undefined;
}

export class CSSProcessor {
  static supportedPseudoClasses: Record<string, string> =
    getSupportedPseudoClasses();

  static convertSelector = (sel: string) => {
    if ((pseudoSelectors as any)[sel]) {
      return (pseudoSelectors as any)[sel];
    }

    let selector = sel;

    if (
      selector.startsWith("$") ||
      selector.endsWith("$") ||
      selector.startsWith("_")
    ) {
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
        return v
          ? `${prefix}[${kebabCase(k)}='${kebabCase(v)}']${suffix}`
          : `${prefix}[${kebabCase(k)}]${suffix}`;
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
            `${prefix}.${pseudoClass}`, // fallback with class for overwrite
          ].join(", ");
        }

        const [k, v] = selector.split("__");
        const stateKey = kebabCase(k);

        return v
          ? `${prefix}[data-${stateKey}='${kebabCase(v)}']`
          : `${prefix}[data-${stateKey}]:not([data-${stateKey}='false'])`;
      }
    }

    return;
  };

  static walkStateValues = (
    values: Record<string, any>,
    cb: (v: any, path: string[], when: string[]) => void,
    ctx: {
      default: object;
      selectorPath: string[];
      path: string[];
    } = {
      default: {},
      selectorPath: [],
      path: [],
    },
  ) => {
    const { $, ...others } = values;

    for (const k in others) {
      const v = others[k] as any;

      const finalDefault = others["default"] ?? ctx["default"];
      const selectorForCurrentNode =
        $ ?? get(finalDefault, [...ctx.path.slice(1), "$"]);
      const selectorPath = selectorForCurrentNode
        ? [...ctx.selectorPath, selectorForCurrentNode]
        : ctx.selectorPath;
      const path = [...ctx.path, k];

      if (isPlainObject(v)) {
        CSSProcessor.walkStateValues(v, cb, {
          path,
          selectorPath: selectorPath,
          default: finalDefault,
        });
        continue;
      }

      cb(v, path, selectorPath);
    }
  };

  constructor(
    private opt: {
      mixins: Record<string, Mixin>;
      processValue: (p: string, v: any) => any;
      varPrefix: string;
    },
  ) {}

  processAll(src: Record<string, any>, full = true) {
    const ret: Array<Record<string, any>> = [];

    const { state, extends: ex, ...others } = src;

    if (ex) {
      // extends should process before all
      for (const sx of ex) {
        ret.push(...this.processAll(sx, full));
      }
    }

    if (state) {
      const cssVars: Record<string, any> = {};
      const finalSx: {} = {};

      CSSProcessor.walkStateValues(state, (v, path, selectorPath) => {
        const varName = `--${this.opt.varPrefix}-state-${path.join("-")}`;
        const prop = last(path) ?? "";
        const sx: Record<string, any> = {};
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

  processTo(dest: Record<string, any>, src: Record<string, any>, full = true) {
    for (const p in src) {
      this.process(dest, p, src[p], full);
    }
  }

  process(dest: Record<string, any>, prop: string, v: any, full = true) {
    if (this.opt.mixins[prop]) {
      const mixinObj = this.opt.mixins[prop]?.get(v);
      if (mixinObj) {
        for (const p in mixinObj) {
          this.process(dest, p, (mixinObj as any)[p], full);
        }
      }
      return;
    }

    let p = prop;

    if (isPlainObject(v)) {
      // resolve pseudoSelectors or std selector
      p = CSSProcessor.convertSelector(p) ?? p;

      dest[p] = dest[p] ?? {};
      this.processTo(dest[p], v);
      return;
    }

    if (full) {
      // resolve aliases
      p = (aliases as any)[p] ?? p;

      // extensions should process value for each
      if ((extensions as any)[p]) {
        for (const p2 of (extensions as any)[p]) {
          dest[p2] = this.opt.processValue(p2, v);
        }
        return;
      }
    }

    dest[p] = this.opt.processValue(p, v);
  }
}
