import { Type, type TypeAny } from "../Type";

export class TypeScriptEncoder {
  static encode<T extends TypeAny>(type: T): string {
    return new TypeScriptEncoder().encode(type);
  }

  def = new Map<string, string>();

  encode<T extends TypeAny>(type: T, all = true): string {
    const d = this._encode(type);
    if (all) {
      return (this.isRef(type) ? "" : d) + this.decls();
    }
    return d;
  }

  decls() {
    let decls = "";
    for (const [name, decl] of this.def) {
      if (decl.startsWith("enum {")) {
        decls += `
      
export enum ${name} ${decl.slice("enum ".length)}`;
        continue;
      }
      decls += `
      
export type ${name} = ${decl}`;
    }

    return decls;
  }

  private isRef(type: TypeAny) {
    return type.schema && type.schema["$ref"];
  }

  private _encode<T extends TypeAny>(type: T, decl = false): string {
    if (this.isRef(type)) {
      const refName = type.schema["$ref"];

      if (!this.def.has(refName)) {
        // set to lock to avoid loop
        this.def.set(refName, "");
        this.def.set(refName, this._encode(type.schema["$underlying"](), true));
      }

      return refName;
    }

    switch (type.type) {
      case "intersection": {
        return `(${type.schema.allOf
          .map((t: TypeAny) => this._encode(t))
          .join(" & ")})`;
      }

      case "union": {
        return `(${type.schema.oneOf
          .map((t: TypeAny) => this._encode(t))
          .join(" | ")})`;
      }

      case "literal": {
        return JSON.stringify(type.schema.enum[0]);
      }

      case "enums": {
        if (decl) {
          return `enum {
${type.schema.enum
            .map((v: any) => `${v} = ${JSON.stringify(v)}`)
            .join(",\n")}         
}`;
        }

        return type.schema.enum
          .map((v: any) => JSON.stringify(v))
          .join(" | ");
      }

      case "record": {
        return `{ [k: ${this._encode(
          type.schema.propertyNames
        )}]: ${this._encode(type.schema.additionalProperties)} }`;
      }

      case "object":
        let ts = `{
`;

        for (const p in type.schema.properties) {
          const propSchema = type.schema.properties[p] as Type;

          ts += `  ${JSON.stringify(p)}`;
          if (propSchema.isOptional) {
            ts += "?";
          }

          ts += `: ${this._encode(propSchema)},
`;
        }

        ts += "}";

        return ts;
      case "tuple":
        return `[${type.schema.items
          .map((t: TypeAny) => this._encode(t))
          .join(", ")}]`;
      case "array":
        return `Array<${this._encode(type.schema.items)}>`;
      case "string": {
        return "string";
      }
      case "binary": {
        return "File | Blob";
      }
      case "number":
      case "integer": {
        return "number";
      }
      case "boolean": {
        return "boolean";
      }
      case "nil": {
        return "null";
      }
    }

    return "any";
  }
}
