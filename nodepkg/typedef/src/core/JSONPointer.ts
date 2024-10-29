import { Schema } from "@innoai-tech/typedef";

export class JSONPointer {
  static parse(pointer: string): any[] {
    if (pointer === "") {
      return [];
    }

    if (pointer === "/") {
      return [""];
    }

    if (pointer.charAt(0) !== "/") {
      throw new Error("Invalid JSON pointer: " + pointer);
    }

    const parts = pointer.substring(1).split(/\//);

    return parts.map((v, i) => JSONPointer.unescape(v, i === parts.length - 1));
  }

  static create(keyPath: any[] = []) {
    if (keyPath.length === 0) {
      return "";
    }
    return "/" + keyPath.map(JSONPointer.escape).join("/");
  }

  static unescape(str: string, last?: boolean) {
    if (str == "" && last) {
      return Schema.RecordKey;
    }

    return str.replace(/~1/g, "/").replace(/~0/g, "~");
  }

  static escape(p: string | number | symbol) {
    if (p == Schema.RecordKey) {
      return "";
    }
    return p.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }

  static get<T>(obj: object, pointerOrTokens: string | string[]): T {
    const refTokens = Array.isArray(pointerOrTokens)
      ? pointerOrTokens
      : JSONPointer.parse(pointerOrTokens);

    for (let i = 0; i < refTokens.length; i++) {
      const tok = refTokens[i];

      if (i > 0 && tok == Schema.RecordKey) {
        return refTokens[i - 1];
      }

      if (!(typeof obj == "object" && tok in obj)) {
        throw new Error("Invalid reference token: " + tok);
      }

      obj = (obj as any)[tok];
    }

    return obj as any;
  }
}
