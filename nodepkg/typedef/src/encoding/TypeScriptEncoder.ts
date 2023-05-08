import { Type, type TypeAny } from "../Type";

export class TypeScriptEncoder {
  static encode<T extends TypeAny>(type: T): string {
    return new TypeScriptEncoder().encode(type);
  }

  def = new Map<string, string>();

  encode<T extends TypeAny>(type: T): string {
    let s = this._encode(type);

    for (const [name, d] of this.def) {
      if (d.startsWith("enum {")) {
        s += `
      
export enum ${name} = ${d.slice("enum ".length)}`;
        continue;
      }
      s += `
      
export type ${name} = ${d}`;
    }

    return s;
  }

  private _encode<T extends TypeAny>(type: T, decl = false): string {
    if (type.schema && type.schema["$ref"]) {
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

      case "enums": {
        if (decl) {
          return `enum {
${Object.values(type.schema)
            .map((v) => `${v}: ${JSON.stringify(v)}`)
            .join(",\n")}         
}`;
        }

        return Object.values(type.schema)
          .map((v) => JSON.stringify(v))
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

        for (const p in type.schema) {
          const propSchema = type.schema[p] as Type;

          ts += "  ";

          ts += p;
          if (propSchema.isOptional) {
            ts += "?";
          }

          ts += `: ${this._encode(propSchema)},
`;
        }

        ts += "}";

        return ts;
      case "tuple":
        console.log(type.schema);
        return `[${type.schema.items
          .map((t: TypeAny) => this._encode(t))
          .join(", ")}]`;
      case "array":
        return `Array<${this._encode(type.schema)}>`;
      case "string": {
        return "string";
      }
      case "number":
      case "integer": {
        return "number";
      }
      case "boolean": {
        return "boolean";
      }
    }

    return "any";
  }
}
