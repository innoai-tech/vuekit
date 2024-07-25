import {
  isArray,
  isFunction,
  isObject,
  isString,
  isUndefined,
} from "./typed.ts";
import { Printer } from "./printer.ts";

export function stringify(v: any): string {
  const w = new writer();
  w.print(v);
  return w.toString();
}

class writer {
  #p = new Printer();

  toString() {
    return this.#p.toString();
  }

  print(v: any): void {
    if (isArray(v)) {
      if (v.length == 0) {
        this.#p.write("[]");
        return;
      }

      this.#p.write("[");
      this.#p.break();

      this.#p.withIdent(() => {
        for (const item of v) {
          if (!isValidJSONValue(item)) {
            continue;
          }
          this.#p.tab();
          this.print(item);
          this.#p.write(",");
          this.#p.break();
        }
      });

      this.#p.tab();
      this.#p.write("]");
      return;
    }

    if (isObject(v)) {
      const entities = Object.entries(v).filter(([_, v]) =>
        isValidJSONValue(v),
      );

      if (entities.length == 0) {
        this.#p.write("{}");
        return;
      }

      if (entities.length == 1) {
        const [prop, value] = entities[0]!;
        const propName = stringifyPropertyName(prop);
        this.#p.write(propName);
        this.#p.write(": ");
        this.print(value);
        return;
      }

      const writeProps = () => {
        const keyValues: Record<string, string> = {};

        let propMaxLength = 0;

        for (const [prop, v] of entities) {
          let propName = `${stringifyPropertyName(prop)}: `;
          let value = v;

          while (isObject(value) && Object.keys(value).length == 1) {
            const [k, v] = Object.entries(value)[0]!;
            propName += `${stringifyPropertyName(k)}: `;
            value = v;
          }

          keyValues[propName] = value;

          const n = propName.length;
          if (n > propMaxLength) {
            propMaxLength = n;
          }
        }

        for (const [propName, propValue] of Object.entries(keyValues)) {
          this.#p.tab();
          this.#p.write(propName);
          this.#p.space(propMaxLength - propName.length);
          this.print(propValue);
          this.#p.break();
        }
      };

      if (!this.#p.written) {
        writeProps();
        return;
      }

      this.#p.write("{");
      this.#p.break();
      this.#p.withIdent(() => {
        writeProps();
      });
      this.#p.tab();
      this.#p.write("}");

      return;
    }

    if (isString(v)) {
      if (isMultiline(v)) {
        this.#writeMultiline(v, `"""`);
        return;
      }

      this.#p.write(quote(v, `"`));
      return;
    }

    this.#p.write(JSON.stringify(v));
    return;
  }

  #writeMultiline(v: string, quote: string) {
    this.#p.write(quote);
    this.#p.break();

    this.#p.withIdent(() => {
      for (const l of lines(v)) {
        this.#p.tab();
        this.#p.write(l);
        this.#p.break();
      }

      this.#p.tab();
      this.#p.write(quote);
    });

    return;
  }
}

export function stringifyPropertyName(prop: string) {
  if (isValidIdentity(prop)) {
    return prop;
  }
  return JSON.stringify(prop);
}

function isValidJSONValue(v: any) {
  return !(isUndefined(v) || isFunction(v));
}

export function isValidIdentity(v: string) {
  return /^[A-Za-z$_]([$_A-Za-z0-9]+)?$/.test(v);
}

function isMultiline(v: string) {
  return /[\r\n]/.test(v);
}

function quote(s: string, q: string): string {
  return `${q}${s
    .split("")
    .map((c) => {
      if (c == q) {
        return "\\" + q;
      }
      return c;
    })
    .join("")}${q}`;
}

function* lines(s: string): Iterable<string> {
  const breaks = "\r\n";

  let start = 0;
  let breakChar = "";

  for (let end = 0; end < s.length; end++) {
    const char = s.charAt(end);
    if (breaks.includes(char)) {
      if (breakChar && breakChar != "\r") {
        continue;
      }

      if (end == 0) {
        yield "";
        start = end + 1;
        continue;
      }

      yield s.slice(start, end);
      start = end + 1;
    }
  }
}
