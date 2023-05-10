import { type TypeAny } from "../Type";
import * as t from "../t";
import {
  assign,
  filter,
  has,
  isArray,
  isBoolean,
  map,
  some,
  last,
  mapValues,
  isPlainObject,
  isEmpty
} from "@innoai-tech/lodash";
import type { JSONSchema } from "./JSONSchemaEncoder";

export const refName = (ref: string) => {
  return last(ref.split("/"))!;
};

export class JSONSchemaDecoder {
  static decode(
    type: JSONSchema,
    resolveRef: (ref: string) => [JSONSchema, string]
  ): TypeAny {
    return new JSONSchemaDecoder(resolveRef).decode(type);
  }

  def = new Map<string, TypeAny>();

  constructor(private resolveRef: (ref: string) => [JSONSchema, string]) {
  }

  decode(jsonSchema: JSONSchema): TypeAny {
    const tt = this._decode(jsonSchema);
    if (jsonSchema && jsonSchema["description"]) {
      return tt.annotate({
        // only pick the first line as description
        description: jsonSchema["description"].split("\n")[0]
      });
    }
    return tt;
  }

  private _decode(schema: JSONSchema): TypeAny {
    schema = normalizeSchema(schema);

    if (schema["$ref"]) {
      const [reffedSchema, refName] = this.resolveRef(schema["$ref"]);

      if (!this.def.has(refName)) {
        this.def.set(refName, t.any());
        this.def.set(refName, this.decode(reffedSchema));
      }

      return t.ref(refName, () => this.def.get(refName)!);
    }

    if (schema["enum"]) {
      if (schema["enum"].length == 1) {
        return t.literal(schema["enum"][0]);
      }
      return t.enums(schema["enum"]);
    }

    if (schema["oneOf"]) {
      if (schema["discriminator"]) {
        const discriminatorPropertyName = schema["discriminator"][
          "propertyName"
          ] as string;
        if (discriminatorPropertyName) {
          const mapping: Record<string, any> = {};

          for (const o of schema["oneOf"]) {
            const tt = this.decode(o);

            if (tt) {
              const objectSchema: Record<string, any> = {};
              const values: any[] = [];

              for (const [propName, _, p] of tt.entries(
                {},
                { path: [], branch: [] }
              )) {
                if (p.type === "never") {
                  continue;
                }

                if (propName === discriminatorPropertyName) {
                  switch (p.type) {
                    case "literal": {
                      values.push(p.schema);
                      break;
                    }
                    case "enums": {
                      values.push(...Object.values(p.schema as Record<string, any>));
                    }
                  }
                  continue;
                }

                objectSchema[propName] = p;
              }

              if (values.length) {
                for (const value of values) {
                  mapping[value] = isEmpty(objectSchema) ? t.object() : t.object(objectSchema);
                }
              }
            }
          }

          return t.discriminatorMapping(discriminatorPropertyName, mapping);
        }
      }

      const oneOf = map(schema["oneOf"], (s) => this.decode(s));

      if (oneOf.length === 1) {
        return oneOf[0]!;
      }

      return t.union(...oneOf);
    }

    if (schema["allOf"]) {
      const allOf = map(schema["allOf"], (s) => this.decode(s));

      if (allOf.length === 1) {
        return allOf[0]!;
      }

      return t.intersection(...allOf);
    }

    if (isObjectType(schema)) {
      if (isPlainObject(schema["additionalProperties"])) {
        return t.record(
          this.decode(schema["propertyNames"] ?? { type: "string" }),
          this.decode(schema["additionalProperties"])
        );
      }

      const required = schema["required"] ?? [];

      return t.object(
        mapValues(schema["properties"], (s, n) => {
          const propType = this.decode(s);
          if (required.includes(n)) {
            return propType;
          }
          return propType.optional();
        })
      );
    }

    if (isArrayType(schema)) {
      if (isArray(schema["items"])) {
        return t.tuple(
          (schema["items"] as JSONSchema[]).map((s) => this.decode(s)) as any
        );
      }

      return t.array(this.decode(schema["items"]));
    }

    if (isStringType(schema)) {
      if (schema["format"] === "binary") {
        return t.binary();
      }
      return t.string();
    }

    if (isNumberType(schema)) {
      if (schema.type === "integer") {
        return t.integer();
      }
      return t.number();
    }

    if (isBooleanType(schema)) {
      return t.boolean();
    }

    if (isNullType(schema)) {
      return t.nil();
    }

    return t.any();
  }
}

const isObjectType = (schema: any): boolean => schema.type === "object";
const isNullType = (schema: any): boolean => schema.type === "null";
const isArrayType = (schema: any): boolean => schema.type === "array";
const isNumberType = (schema: any): boolean =>
  schema.type === "number" || schema.type === "integer";
const isStringType = (schema: any): boolean => schema.type === "string";
const isBooleanType = (schema: any): boolean => schema.type === "boolean";

const typeRelationKeywords: { [k: string]: string[] } = {
  object: [
    "properties",
    "additionalProperties",
    "unevaluatedProperties",
    "patternProperties",
    "propertyNames",
    "dependentSchemas",

    "maxProperties",
    "minProperties"
    // "required",
    // "dependentRequired",
  ],
  array: [
    "contains",
    "items",
    "additionalItems",
    "unevaluatedItems",

    "maxItems",
    "minItems",
    "uniqueItems",
    "maxContains",
    "minContains"
  ],
  string: [
    "pattern",
    "contentMediaType",
    "contentEncoding",
    "contentSchema",
    "maxLength",
    "minLength"
  ],
  number: [
    "maximum",
    "minimum",
    "multipleOf",
    "exclusiveMaximum",
    "exclusiveMinimum"
  ]
};

const hasProps = <T>(schema: T, props: Array<keyof T>): boolean =>
  some(props, (prop: string) => has(schema, prop));

const isMetaType = (schema: any): any => {
  return !hasProps(schema, ["type", "$ref", "$id", "oneOf", "anyOf", "allOf"]);
};

const normalizeSchema = (schema: any): any => {
  if (isBoolean(schema)) {
    return {};
  }

  // auto complete schema type
  if (!schema.type) {
    for (const t in typeRelationKeywords) {
      if (hasProps(schema, typeRelationKeywords[t] as any)) {
        schema.type = t as any;
        break;
      }
    }
  }

  if (schema.const) {
    schema.enum = [schema.const];
  }

  const mayNormalizeMeta = (key: "allOf" | "anyOf" | "oneOf") => {
    if (schema[key]) {
      schema[key] = filter(schema[key], (s) => {
        const ns = normalizeSchema(s);
        if (isMetaType(ns)) {
          if (key === "allOf") {
            // only allOf will merge meta
            assign(schema, ns);
          }
          return false;
        }
        return true;
      });

      if (schema[key]!.length === 0) {
        schema[key] = undefined;
      }
    }
  };

  mayNormalizeMeta("allOf");
  mayNormalizeMeta("anyOf");
  mayNormalizeMeta("oneOf");

  return schema;
};
