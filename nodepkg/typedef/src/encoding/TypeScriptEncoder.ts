import { Schema, t, type Type } from "../core";
import { isNumber, isString } from "../core/util";
import { camelCase } from "@innoai-tech/lodash";

export class TypeScriptEncoder {
  static encode(type: Type, all = true): string {
    return new TypeScriptEncoder().encode(type, all);
  }

  def = new Map<string, [string, string]>();

  encode(type: Type, all = true): string {
    const d = this._encode(type);
    if (all) {
      return (Schema.schemaProp(type, "$ref") ? "" : d) + this.decls();
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

  private _encode(rawType: Type, declName = ""): string {
    let type = rawType;

    if (Schema.schemaProp(type, "$ref")) {
      const refName = Schema.schemaProp(type, "$ref");

      if (!this.def.has(refName)) {
        // set to lock to avoid loop
        this.def.set(refName, ["type", "any"]);

        const decl = this._encode(
          Schema.schemaProp(type, Schema.unwrap)(),
          refName
        );

        if (decl) {
          this.def.set(refName, ["type", decl]);
        }
      }

      return `/* @type:${type.type} */ ${refName}`;
    }

    switch (type.type) {
      case "intersection": {
        return `(${Schema.schemaProp(type, "allOf")
          .map((t: Type) => this._encode(t))
          .join(" & ")})`;
      }

      case "union": {
        return `(${Schema.schemaProp(type, "oneOf")
          .map((t: Type) => this._encode(t))
          .join(" | ")})`;
      }

      case "literal": {
        return JSON.stringify(Schema.schemaProp(type, "enum")[0]);
      }

      case "enums": {
        if (declName) {
          const isPrefixDigit = (v: any) => {
            if (isNumber(v)) {
              return true;
            }
            if (isString(v) && v.length > 0) {
              const c = v[0]!;
              return c >= "0" && c <= "9";
            }
            return false;
          };

          const toSafeID = (v: string) => {
            if (/[-!~]/.test(v)) {
              return camelCase(v);
            }
            return v;
          };

          this.def.set(declName, [
            "enum",
            `{
${Schema.schemaProp(type, "enum")
              .map((v: any) => `${isPrefixDigit(v) ? `_${toSafeID(v)}` : toSafeID(v)} = ${JSON.stringify(v)}`)
              .join(",\n")}         
}`
          ]);

          const enumLabels = rawType.meta["enumLabels"] as any[];

          if (enumLabels) {
            this.def.set(`display${declName}`, [
              "const",
              `(v: ${declName}) => {
  return ({
${Schema.schemaProp(type, "enum")
                .map(
                  (v: any, i: number) =>
                    `${JSON.stringify(v)}: ${JSON.stringify(enumLabels[i])}`
                )
                .join(",\n")}   
  })[v] ?? v      
}`
            ]);
          }

          return "";
        }

        return Schema.schemaProp(type, "enum")
          .map((v: any) => JSON.stringify(v))
          .join(" | ");
      }

      case "record": {
        const keyType = this._encode(
          Schema.schemaProp(type, "propertyNames") ?? t.string()
        );

        if (keyType.startsWith("/* @type:enums */")) {
          return `{ [k in ${keyType}]: ${this._encode(Schema.schemaProp(type, "additionalProperties") ?? t.any())} }`;
        }

        return `{ [k: ${keyType}]: ${this._encode(Schema.schemaProp(type, "additionalProperties") ?? t.any())} }`;
      }

      case "object": {
        let ts = `{
`;

        for (const [p, propType] of Object.entries(
          (Schema.schemaProp(type, "properties") ?? {}) as Record<string, Type>
        )) {
          ts += `  ${JSON.stringify(p)}`;
          if (Schema.schemaProp(propType, Schema.optional)) {
            ts += "?";
          }
          ts += `: ${this._encode(propType)},
`;
        }

        ts += "}";

        return ts;
      }
      case "tuple":
        return `[${Schema.schemaProp(type, "items")
          .map((t: Type) => this._encode(t))
          .join(", ")}]`;
      case "array":
        return `Array<${this._encode(Schema.schemaProp(type, "items") ?? t.any())}>`;
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
