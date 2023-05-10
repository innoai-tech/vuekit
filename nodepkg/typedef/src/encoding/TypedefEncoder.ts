import { Type, type TypeAny } from "../Type";
import { get, omit, isEmpty } from "@innoai-tech/lodash";
import * as t from "../t";

export class TypedefEncoder {
  static encode<T extends TypeAny>(type: T): string {
    return new TypedefEncoder().encode(type);
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
      decls += `
      
export const ${name}Schema = /*#__PURE__*/${decl}`;
    }

    return decls;
  }

  private isRef(type: TypeAny) {
    return type.schema && type.schema["$ref"];
  }

  private _encode<T extends TypeAny>(type: T, declName = ""): string {
    return `${this._encodeCode(type, declName)}${
      type.meta["description"]
        ? `.annotate({ description: ${JSON.stringify(type.meta["description"])} })`
        : ""
    }`;
  }

  private _encodeCode<T extends TypeAny>(type: T, declName = ""): string {
    if (this.isRef(type)) {
      const refName = type.schema["$ref"];

      if (!this.def.has(refName)) {
        // set to lock to avoid loop
        this.def.set(refName, "");
        this.def.set(
          refName,
          this._encode(type.schema["$underlying"](), refName)
        );
      }

      return `t.ref("${refName}", () => ${refName}Schema)`;
    }

    switch (type.type) {
      case "intersection": {
        return `t.intersection(${type.schema.allOf
          .map((t: TypeAny) => this._encode(t))
          .join(", ")})`;
      }

      case "union": {
        const discriminatorPropertyName = get(type.schema, [
          "discriminator",
          "propertyName"
        ]);
        if (discriminatorPropertyName) {
          const mapping: Record<string, string> = {};

          for (const sub of type.schema.oneOf) {
            const e = get(sub.schema, discriminatorPropertyName);
            const props = omit(sub.schema, discriminatorPropertyName);
            if (e) {
              if (e.type == "enums") {
                for (const v of Object.values(e.schema)) {
                  mapping[`${v}`] = this._encode(t.object(props));
                }
              }
            }
          }

          return `t.discriminatorMapping("${discriminatorPropertyName}", {
${Object.keys(mapping)
            .map((k) => `${JSON.stringify(k)}: ${mapping[k]}`)
            .join(",\n")}
          })`;
        }

        return `t.union(${type.schema.oneOf
          .map((t: TypeAny) => this._encode(t))
          .join(", ")})`;
      }

      case "literal": {
        return `t.literal(${JSON.stringify(type.schema)})`;
      }

      case "enums": {
        if (declName) {
          return `t.nativeEnum(${declName})`;
        }

        return `t.enums([${Object.values(type.schema)
          .map((v) => JSON.stringify(v))
          .join(", ")}])`;
      }

      case "record": {
        return `t.record(${this._encode(
          type.schema.propertyNames
        )}, ${this._encode(type.schema.additionalProperties)})`;
      }

      case "object":
        if (isEmpty(type.schema)) {
          return `t.object()`;
        }

        let ts = `{
`;

        for (const p in type.schema) {
          const propSchema = type.schema[p] as Type;

          ts += `  ${JSON.stringify(p)}`;
          ts += `: ${this._encode(propSchema)}`;

          if (propSchema.isOptional) {
            ts += ".optional()";
          }

          ts += `,
`;
        }

        ts += "}";

        return `t.object(${ts})`;
      case "tuple":
        return `t.tuple([${type.schema.items
          .map((t: TypeAny) => this._encode(t))
          .join(", ")}])`;
      case "array":
        return `t.array(${this._encode(type.schema)})`;
      case "string":
        return `t.string()`;
      case "binary":
        return `t.binary()`;
      case "number":
        return `t.number()`;
      case "integer":
        return `t.integer()`;
      case "boolean":
        return "t.boolean()";
      case "nil":
        return "t.nil()";
    }

    return "t.any()";
  }
}
