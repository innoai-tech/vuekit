import { component, component$, createProvider, render, rx, t, type VNodeChild } from "@innoai-tech/vuekit";
import { styled } from "@innoai-tech/vueuikit";
import type { JSONSchema } from "./models";
import { OpenAPIProvider } from "./OpenAPIProvider.tsx";
import { isUndefined } from "./util/typed.ts";
import { Markdown } from "@innoai-tech/vuemarkdown";

export const Line = styled(
  "div",
  {
    spacing: t.number().optional().default(0),
    $default: t.custom<VNodeChild>().optional()
  },
  (props, { slots }) => {
    const i = IntentContextProvider.use();

    return (Root) => (
      <Root
        style={{
          paddingLeft: `${i.indent}em`,
          marginTop: props.spacing * 0.5
        }}
      >
        {slots.default?.()}
      </Root>
    );
  }
)({
  position: "relative",
  display: "block"
});

export const Description = styled(
  "div",
  {
    schema: t.custom<JSONSchema>()
  },
  (props, {}) => {
    return (Root) => {
      const schema = props.schema;

      const description = schema["description"] ?? "";

      if (description.length == 0) {
        return null;
      }

      return (
        <Root>
          <Markdown text={description} />
        </Root>
      );
    };
  }
)({
  position: "relative",
  pt: 4,

  "& p": {
    my: 1,

    "&::before": {
      content: `"// "`,
      fontFamily: "code"
    },

    wordBreak: "keep-all",
    whiteSpace: "nowrap",
    opacity: 0.7
  },
  "& code": {
    wordBreak: "keep-all",
    whiteSpace: "nowrap"
  },

  textStyle: "sys.body-small",
  fontSize: 10,
  lineHeight: 12
});

const Token = styled("div")({
  display: "inline-table",
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 11,
  lineHeight: 14
});

const PropName = styled(Token, {
  deprecated: t.boolean().optional(),
  optional: t.boolean().optional(),
  nullable: t.boolean().optional()
})({
  color: "sys.primary",

  _deprecated: {
    textDecoration: "line-through"
  },

  _nullable: {
    "&:after": { content: `"??"`, color: "sys.error" }
  },

  _optional: {
    "&:after": { content: `"?"`, color: "sys.secondary" }
  }
});


const Annotation = ({ name, value, extra }: { name: string; value: any, extra?: Record<string, any> }) => {
  if (value == "") {
    return null;
  }

  return (
    <Line>
      <Token
        sx={{
          opacity: 0.7,
          wordBreak: "keep-all",
          whiteSpace: "nowrap"
        }}
      >
        <Token sx={{ color: "sys.primary" }}>{`@${name}(`}</Token>
        {`${value}`}
        {Object.entries(extra ?? {}).map(([k, v]) => {
          return (
            <>
              <Token sx={{ opacity: 0.5 }}>{`,`}&nbsp;</Token>
              <Token sx={{ opacity: 0.5 }}>{k}</Token>
              <Token sx={{ opacity: 0.5 }}>{`:`}&nbsp;</Token>
              <Token sx={{ opacity: 0.7 }}>{v}</Token>
            </>
          );
        })}
        <Token sx={{ color: "sys.primary" }}>{`)`}</Token>
      </Token>
    </Line>
  );
};


const IntentContextProvider = createProvider(
  () => {
    return {
      indent: 0
    };
  },
  {
    name: "IntentContext"
  }
);


const Indent = component(
  {
    $default: t.custom<VNodeChild>().optional()
  },
  ({}, { slots }) => {
    const i = IntentContextProvider.use();

    return () => (
      <IntentContextProvider
        value={{
          indent: i.indent + 1
        }}
      >
        {slots.default?.()}
      </IntentContextProvider>
    );
  }
);

const SchemaViewLink = component$(
  {
    schema: t.custom<JSONSchema>()
  }, (props) => {

    return () => {
      const schema = props.schema;

      return (
        <>
          <SchemaView schema={schema} />
        </>
      );
    };
  });


export const SchemaView = component$(
  {
    schema: t.custom<JSONSchema>()
  },
  (props) => {
    const openapi$ = OpenAPIProvider.use();
    const schema = props.schema ?? {};

    if (schema["$ref"]) {
      const ref = schema["$ref"];

      return rx(
        openapi$.schema$(ref),
        render((schema) => {
          if (schema && schema["$id"]) {
            return (
              <SchemaViewLink schema={schema} />
            );
          }
          return null;
        })
      );

    }

    return () => {
      if (Array.isArray(schema["oneOf"])) {
        if (schema["discriminator"]) {
          return (
            <>
              {Object.entries(schema["discriminator"]["mapping"] ?? {})
                .toSorted()
                .map(([value, mappingSchema]) => {
                  if (!mappingSchema) {
                    return null;
                  }

                  return (
                    <>
                      <Line spacing={2}>
                        &nbsp;
                      </Line>
                      <Line>
                        <PropName sx={{ py: 8 }}>
                          {"if "}
                          {schema["discriminator"]?.["propertyName"]} = <SchemaView schema={{ enum: [value] }} />
                          {":"}
                        </PropName>
                      </Line>
                      <Indent>
                        <Token>&nbsp;&nbsp;</Token>
                        <SchemaView schema={mappingSchema} />
                      </Indent>
                    </>
                  );
                })}
            </>
          );
        }

        return (
          <>
            {schema["oneOf"].map((s, i) => {
              return (
                <>
                  {i > 0 && (
                    <Token>&nbsp;{" | "}&nbsp;</Token>
                  )}
                  <Token sx={{ mr: "1em" }}>{":"}</Token>
                  <SchemaView schema={s} />
                </>
              );
            })}
          </>
        );
      }

      if (Array.isArray(schema["allOf"])) {
        return (
          <Token>
            {schema["allOf"]
              .filter((s) => !(Object.keys(s).length))
              .map((s, i) => {
                return (
                  <>
                    {i > 0 && <Token>&nbsp;{"&"}&nbsp;</Token>}
                    <SchemaView schema={s} />
                  </>
                );
              })}
          </Token>
        );
      }

      if (schema.type == "array") {
        return (
          <Token sx={{ wordBreak: "keep-all", whiteSpace: "nowrap" }}>
            <Token>{"Array<"}</Token>
            <SchemaView schema={schema["items"] ?? ({})} />
            <Token>{">"}</Token>
          </Token>
        );
      }

      if (schema.type == "object") {
        return (
          <>
            {schema["$id"] && <Token id={schema["$id"]}>{schema["$id"]}&nbsp;</Token>}
            <Token>{"{"}</Token>
            <Indent>
              <>
                {Object.entries((schema["properties"] ?? {}) as Record<string, JSONSchema>).map(([propName, propSchema]) => {
                  if (!propSchema) {
                    return null;
                  }

                  return (
                    <>
                      <Line spacing={2}>
                        <Description schema={propSchema} />
                        <Token
                          sx={{ wordBreak: "keep-all", whiteSpace: "nowrap" }}
                        >
                          <PropName
                            nullable={propSchema["nullable"]}
                            deprecated={propSchema["deprecated"]}
                            optional={!(schema["required"] ?? []).includes(propName)}
                          >
                            {propName}
                          </PropName>
                          <Token sx={{ mr: "1em" }}>{":"}</Token>
                          <SchemaView schema={propSchema} />
                        </Token>
                      </Line>
                    </>
                  );
                })}
              </>
            </Indent>
            {schema["additionalProperties"] && (
              <>
                <Indent>
                  <Line>
                    <Token sx={{ mr: 1 }}>{"[K:"}&nbsp;</Token>
                    <SchemaView
                      schema={schema["propertyNames"] ?? { type: "string" }}
                    />
                    <Token sx={{ mr: 1 }}>{"]:"}&nbsp;</Token>
                    <SchemaView schema={schema["additionalProperties"]} />
                  </Line>
                </Indent>
              </>
            )}
            <Token>{"}"}</Token>
          </>
        );
      }

      let [type, format, enumValues, defaultValue] = [
        schema["type"],
        schema["format"],
        schema["enum"],
        schema["default"]
      ];

      if (enumValues && enumValues.length == 1) {
        return <Token>{JSON.stringify(enumValues[0])}</Token>;
      }

      if (!type && (enumValues && enumValues.length > 0)) {
        type = typeof enumValues[0];
      }

      return (
        <>
          <Token sx={{ fontWeight: "bold" }}>{type || "any"}</Token>
          <Indent>
            {format && <Annotation name={"format"} value={format} />}
            {!isUndefined(defaultValue) && (
              <Annotation name={"default"} value={defaultValue} />
            )}
            {!hasValidate(schema) && (
              <Annotation name={"validate"} value={displayValidate(schema)} />
            )}
            {Array.isArray(enumValues) && (
              <>
                {enumValues.map((value: any, i) => (
                  <Annotation
                    key={value}
                    name={"enum"}
                    value={`${value}`}
                    extra={schema["x-enum-labels"]?.[i] ? {
                      "label": JSON.stringify(schema["x-enum-labels"][i])
                    } : {}}
                  />
                ))}
              </>
            )}
          </Indent>
        </>
      );
    };
  }
);


function hasValidate(schema: any) {
  return ([
    "enum",
    "maximum",
    "exclusiveMaximum",
    "minimum",
    "exclusiveMinimum",
    "maxLength",
    "minLength",
    "pattern",
    "maxItems",
    "minItems",
    "maxProperties",
    "minProperties"
  ] as Array<keyof ValidatedSchemaProps>).some((key) => Object.hasOwn(schema, key));
}


export interface ValidatedSchemaProps {
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
}

export function getMax(schema: JSONSchema): string {
  if (schema["maxProperties"]) {
    return schema["maxProperties"];
  }
  if (schema["maxItems"]) {
    return schema["maxItems"];
  }
  if (schema["maximum"]) {
    return schema["maximum"];
  }
  if (schema["maxLength"]) {
    return schema["maxLength"];
  }

  if (schema.type === "string" && schema["format"] === "uint64") {
    return "19";
  }

  if (
    (schema.type === "number" || schema.type === "integer") &&
    schema["format"]
  ) {
    return `${
      Math.pow(2, Number(schema["format"].replace(/[^0-9]/g, "")) - 1) - 1
    }`;
  }

  return "+∞";
}

export function getMin(schema: JSONSchema = {}): string {
  if (schema["minProperties"]) {
    return schema["minProperties"];
  }
  if (schema["minItems"]) {
    return schema["minItems"];
  }
  if (schema["minimum"]) {
    return schema["minimum"];
  }
  if (schema["minLength"]) {
    return schema["minLength"];
  }

  if (schema.type === "string") {
    return "0";
  }

  if (
    (schema.type === "number" || schema.type === "integer") && schema["format"]
  ) {
    return `${
      Math.pow(2, Number(schema["format"].replace(/[^0-9]/g, "")) - 1) - 1
    }`;
  }
  return "-∞";
}

export function displayValidate(schema: JSONSchema = {}): string {
  if (schema["x-tag-validate"]) {
    return schema["x-tag-validate"];
  }

  if (!hasValidate(schema)) {
    return "";
  }

  if (schema["pattern"]) {
    return `@r/${String(schema["pattern"])}/`;
  }

  return `@${schema["exclusiveMinimum"]} ? "(" : "["}${getMin(schema)},${getMax(schema)}${schema["exclusiveMaximum"] ? ")" : "]"}`;
}
