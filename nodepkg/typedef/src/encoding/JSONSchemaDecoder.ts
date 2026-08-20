import { Schema, t, type Type } from "../core";
import type { JSONSchema } from "./JSONSchemaEncoder";
import { isArray, isBoolean, isUndefined } from "es-toolkit/compat";

export const refName = (ref: string) => {
  return ref.split("/")?.findLast(() => true) ?? "";
};

export class JSONSchemaDecoder {
  static decode(type: JSONSchema | false, resolveRef: (ref: string) => [JSONSchema, string]): Type {
    if (type === false) {
      return t.never() as any;
    }
    return new JSONSchemaDecoder(resolveRef).decode(type);
  }

  def = new Map<string, Type>();

  constructor(private resolveRef: (ref: string) => [JSONSchema, string]) {}

  decode(jsonSchemaObject: JSONSchema): Type {
    const jsonSchema = structuredClone(jsonSchemaObject);

    let tt = this._decode(jsonSchema);

    let hasTitle = false;

    if (jsonSchema?.["title"]) {
      tt = tt.use(t.annotate({ title: jsonSchema?.["title"] }));
      hasTitle = true;
    }

    if (jsonSchema?.["description"]) {
      if (hasTitle) {
        tt = tt.use(
          t.annotate({
            description: jsonSchema?.["description"],
          }),
        );
      } else {
        const [title, ...others] = jsonSchema?.["description"].split(/[.\n]/) ?? [];

        tt = tt.use(
          t.annotate({
            title: title,
            description: others ? others.join("\n").trim() : undefined,
          }),
        );
      }
    }

    if (jsonSchema) {
      for (const rule of validationRules) {
        if (!isUndefined(jsonSchema[rule])) {
          if (rule == "pattern") {
            tt = tt.use(t.pattern(new RegExp(jsonSchema[rule]), jsonSchema["x-pattern-err-msg"]));
            delete jsonSchema[rule];
            continue;
          }

          const ruleFn = (t as any)[rule];
          if (ruleFn) {
            tt = tt.use(ruleFn(jsonSchema[rule]));
            delete jsonSchema[rule];
          }
        }
      }

      delete jsonSchema["title"];
      delete jsonSchema["description"];

      if (Object.keys(jsonSchema).length > 0) {
        tt = tt.use(t.annotate(jsonSchema));
      }
    }

    return tt;
  }

  private ref = (refName: string): Type => {
    const t = this.def.get(refName);
    if (t) {
      return t;
    }
    throw new Error(`undefined type ${refName}`);
  };

  private _decode(s: JSONSchema): Type {
    const schema = normalizeSchema(s);

    if (schema["$ref"]) {
      const [reffedSchema, refName] = this.resolveRef(schema["$ref"]);

      if (!this.def.has(refName)) {
        this.def.set(refName, t.any());
        this.def.set(refName, this.decode(reffedSchema));
      }

      return t.ref(refName, () => this.ref(refName));
    }

    if (schema["enum"]) {
      const e = t.enums(schema["enum"]);

      if (schema["x-enum-labels"]) {
        return e.use(
          t.annotate({
            enumLabels: schema["x-enum-labels"],
          }),
        );
      }

      return e;
    }

    if (schema["discriminator"]) {
      const discriminatorPropertyName = schema["discriminator"]["propertyName"] as string;

      if (discriminatorPropertyName) {
        const mapping: Record<string, any> = {};

        if (schema["discriminator"]["mapping"]) {
          const discriminatorMapping = schema["discriminator"]["mapping"] as Record<string, any>;

          if (discriminatorMapping) {
            for (const k of Object.keys(discriminatorMapping).toSorted()) {
              mapping[k] = this.decode(discriminatorMapping[k]);
            }
          }
        }

        if (schema["oneOf"]) {
          for (const o of schema["oneOf"]) {
            const sub = this.decode(o);

            const discriminatorPropertyType = Schema.schemaProp(sub, "properties")?.[
              discriminatorPropertyName
            ];

            if (discriminatorPropertyType) {
              const discriminatorPropertyValue = Schema.schemaProp(
                discriminatorPropertyType,
                "enum",
              )?.[0];

              if (!isUndefined(discriminatorPropertyValue)) {
                mapping[`${discriminatorPropertyValue}`] = sub;
              }
            }
          }
        }

        return t.discriminatorMapping(discriminatorPropertyName, mapping);
      }
    }

    if (schema["oneOf"]) {
      const oneOf = schema["oneOf"].map((s: JSONSchema) => this.decode(s));

      if (oneOf.length === 1) {
        return oneOf[0] as Type;
      }

      return t.union(...oneOf);
    }

    if (schema["allOf"]) {
      const allOf = schema["allOf"].map((s: JSONSchema) => this.decode(s));

      if (allOf.length === 1) {
        return allOf[0] as Type;
      }

      return t.intersection(...allOf);
    }

    if (isObjectType(schema)) {
      if (schema["properties"]) {
        const required = schema["required"] ?? [];

        const props: Record<string, Type> = {};

        for (const [prop, s] of Object.entries(schema["properties"])) {
          let propType = this.decode(s as JSONSchema);
          if (!required.includes(prop)) {
            propType = propType.optional();
          }
          props[prop] = propType;
        }

        return t.object(props);
      }

      const additionalProperties = schema["additionalProperties"] ?? {};

      if (additionalProperties) {
        return t.record(
          this.decode(schema["propertyNames"] ?? { type: "string" }) as Type<string>,
          this.decode(additionalProperties),
        );
      }

      return t.object();
    }

    if (isArrayType(schema)) {
      if (isArray(schema["items"])) {
        return t.tuple((schema["items"] as JSONSchema[]).map((s) => this.decode(s)) as any);
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
    "propertyNames",

    "maxProperties",
    "minProperties",

    // "required",
    // "unevaluatedProperties",
    // "patternProperties",
    // "dependentSchemas",
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
    "minContains",
  ],
  string: [
    "pattern",
    "contentMediaType",
    "contentEncoding",
    "contentSchema",
    "maxLength",
    "minLength",
  ],
  number: ["maximum", "minimum", "multipleOf", "exclusiveMaximum", "exclusiveMinimum"],
};

export const validationRules = [
  "maxProperties",
  "minProperties",

  "maxItems",
  "minItems",
  "uniqueItems",

  "pattern",
  "maxLength",
  "minLength",

  "maximum",
  "minimum",
  "multipleOf",
  "exclusiveMaximum",
  "exclusiveMinimum",
];

const hasProps = <T extends object>(schema: T, props: Array<keyof T>): boolean => {
  return props.some((prop) => Object.hasOwn(schema, prop));
};

const isMetaType = (schema: any): any => {
  return !hasProps(schema, ["type", "$ref", "$id", "oneOf", "anyOf", "allOf"]);
};

const normalizeSchema = (schema: any = {}): any => {
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
      schema[key] = (schema[key] as JSONSchema[]).filter((s) => {
        const ns = normalizeSchema(s);
        if (isMetaType(ns)) {
          if (key === "allOf") {
            // only allOf will merge meta
            Object.assign(schema, ns);
          }
          return false;
        }
        return true;
      });

      if (schema[key]?.length === 0) {
        schema[key] = undefined;
      }
    }
  };

  mayNormalizeMeta("allOf");
  mayNormalizeMeta("anyOf");
  mayNormalizeMeta("oneOf");

  return schema;
};
