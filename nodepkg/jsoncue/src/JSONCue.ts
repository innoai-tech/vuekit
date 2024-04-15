import {
  Source,
  stringify,
  toValue,
  asBytes,
  stringifyPropertyName,
} from "./astutil";

export { SyntaxError } from "./astutil";

export abstract class JSONCue {
  static parse<T extends any>(text: string): T {
    const src = Source.parse(text);
    return toValue(src, src.topNode) as unknown as T;
  }

  static stringify(v: any): string {
    return stringify(v);
  }

  static asBytes(s: string) {
    return asBytes(s);
  }

  static stringifyPropertyName(propName: string) {
    return stringifyPropertyName(propName);
  }
}
