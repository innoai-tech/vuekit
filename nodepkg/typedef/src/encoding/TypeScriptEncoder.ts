import { Type, type AnyType, TypeRef } from "../core";

export class TypeScriptEncoder {
  static encode(type: AnyType): string {
    return new TypeScriptEncoder().encode(type);
  }

  def = new Map<string, [string, string]>();

  encode(type: AnyType, all = true): string {
    const d = this._encode(type);
    if (all) {
      return (type instanceof TypeRef ? "" : d) + this.decls();
    }
    return d;
  }

  decls() {
    let decls = "";

    for (const [name, [t, decl]] of this.def) {
      decls += `
      
export ${t} ${name}${t === "enum" ? " " : " = "}${decl}`;
    }

    return decls;
  }

  private _encode(rawType: AnyType, declName = ""): string {
    let type = rawType;

    while (true) {
      if (type instanceof TypeRef) {
        break;
      }
      const unwrapped = type.unwrap;
      if (unwrapped === type) {
        break;
      }
      type = unwrapped as AnyType;
    }

    if (type instanceof TypeRef) {
      const refName = type.schema.$ref;

      if (!this.def.has(refName)) {
        // set to lock to avoid loop
        this.def.set(refName, ["type", "any"]);

        const decl = this._encode(type.unwrap, refName);
        if (decl) {
          this.def.set(refName, ["type", decl]);
        }
      }

      return refName;
    }

    switch (type.type) {
      case "intersection": {
        return `(${type.schema.allOf
          .map((t: AnyType) => this._encode(t))
          .join(" & ")})`;
      }

      case "union": {
        return `(${type.schema.oneOf
          .map((t: AnyType) => this._encode(t))
          .join(" | ")})`;
      }

      case "literal": {
        return JSON.stringify(type.schema.enum[0]);
      }

      case "enums": {
        if (declName) {
          this.def.set(declName, [
            "enum",
            `{
${type.schema.enum
  .map((v: any) => `${v} = ${JSON.stringify(v)}`)
  .join(",\n")}         
}`,
          ]);

          const enumLabels = rawType.getMeta("enumLabels") as any[];

          if (enumLabels) {
            this.def.set(`display${declName}`, [
              "const",
              `(v: ${declName}) => {
  return ({
${type.schema.enum
  .map((v: any, i: number) => `${v}: ${JSON.stringify(enumLabels[i])}`)
  .join(",\n")}   
  })[v] ?? v      
}`,
            ]);
          }

          return "";
        }

        return type.schema.enum.map((v: any) => JSON.stringify(v)).join(" | ");
      }

      case "record": {
        return `{ [k: ${this._encode(
          type.schema.propertyNames,
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
          .map((t: AnyType) => this._encode(t))
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
