import {
  type AnyType,
  component,
  component$,
  createProvider,
  t,
  RouterLink,
  type VNodeChild
} from "@innoai-tech/vuekit";
import { isUndefined } from "@innoai-tech/lodash";
import { styled } from "@innoai-tech/vueuikit";
import { Markdown } from "@innoai-tech/vuemarkdown";

export const Token = styled("div")({
  display: "inline-table",
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 11,
  lineHeight: 14
});

export const PropName = styled<{
  deprecated?: boolean,
  optional?: boolean,
  nullable?: boolean,
}, "div">("div")({
  display: "inline-table",
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 11,
  lineHeight: 14,

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

export const Line = styled<{
  spacing?: number,
  $default?: VNodeChild
}, "div">("div", (props, { slots }) => {
  const i = IntentContextProvider.use();

  return (Root) => (
    <Root
      style={{
        paddingLeft: `${i.indent}em`,
        marginTop: (props.spacing ?? 0) * 0.5
      }}
    >
      {slots.default?.()}
    </Root>
  );
})({
  position: "relative",
  display: "block"
});

export const Description = styled<{
  schema: AnyType
}, "div">("div", (props, {}) => {
    return (Root) => {
      const description = props.schema.getMeta<string>("description") ?? "";

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


export const Indent = component<{
  $default?: VNodeChild,
}>(({}, { slots }) => {
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

class Node {
  constructor(
    public id: string,
    public parent?: Node
  ) {
  }

  child(id: string): Node {
    return new Node(id, this);
  }

  safe(id: string) {
    let n: Node | undefined = this;

    while (n) {
      if (n.id == id) {
        return false;
      }

      n = n.parent;
    }

    return true;
  }
}

const SchemaRenderProvider = createProvider<Node>(() => new Node(""));

const SchemaViewLink = component$<{
  schema: AnyType,
}>((props) => {
  const node = SchemaRenderProvider.use();

  return () => {
    const id = props.schema.getSchema("$ref");

    let schema = props.schema;

    while (schema.getSchema("$ref")) {
      schema = schema.unwrap;
    }

    const needID = schema.type == "intersection" || schema.type == "object" || schema.type == "union" || schema.type == "record" || schema.type == "array" || schema.type == "union";

    return (
      <SchemaRenderProvider value={node.child(id)}>
        {needID && <RouterLink to={`#${id}`}><Token id={id}>{id}&nbsp;</Token></RouterLink>}
        {node.safe(id) && <SchemaView schema={schema} />}
      </SchemaRenderProvider>
    );
  };
});


export const SchemaView = component$<{
  schema: AnyType,
}>((props) => {
    const schema = props.schema;

    if (schema.getSchema("$ref")) {
      return (
        <SchemaViewLink schema={schema} />
      );
    }

    return () => {
      switch (schema.type) {
        case "union":
          return (
            <>
              {schema.getSchema<AnyType[]>("oneOf")?.map((s, i) => {
                return (
                  <>
                    {i > 0 && (
                      <Token>&nbsp;{" | "}&nbsp;</Token>
                    )}
                    <SchemaView schema={s} />
                  </>
                );
              })}
            </>
          );
        case "intersection":
          return (
            <Token>
              {schema.getSchema<AnyType[]>("allOf")
                ?.filter((s) => !(Object.keys(s).length))
                .map((s, i) => {
                  return (
                    <>
                      {i > 0 && (
                        <Token>
                          &nbsp;{"&"}&nbsp;
                        </Token>
                      )}
                      <SchemaView schema={s} />
                    </>
                  );
                })}
            </Token>
          );
        case "array":
          return (
            <Token sx={{ wordBreak: "keep-all", whiteSpace: "nowrap" }}>
              <Token>{"Array<"}</Token>
              <SchemaView schema={schema.getSchema("items") ?? t.any()} />
              <Token>{">"}</Token>
            </Token>
          );
        case "object":
          return (
            <>
              <Token>{"{"}</Token>
              <Indent>
                <>
                  {Object.entries((schema.getSchema("properties") ?? {}) as Record<string, AnyType>).map(([propName, propSchema]) => {
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
                              nullable={propSchema.getSchema("nullable")}
                              deprecated={propSchema.getSchema("deprecated")}
                              optional={!(schema.getSchema("required") ?? []).includes(propName)}
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
              <Token>{"}"}</Token>
            </>
          );
        case "record":
          return (
            <>
              <Token>{"{"}</Token>
              {schema.getSchema("additionalProperties") && (
                <>
                  <Indent>
                    <Line>
                      <Token sx={{ mr: 1 }}>{"[K:"}&nbsp;</Token>
                      <SchemaView
                        schema={schema.getSchema("propertyNames") ?? t.string()}
                      />
                      <Token sx={{ mr: 1 }}>{"]:"}&nbsp;</Token>
                      <SchemaView schema={schema.getSchema("additionalProperties") ?? t.any()} />
                    </Line>
                  </Indent>
                </>
              )}
              <Token>{"}"}</Token>
            </>
          );
        case "enums": {
          const enumValues = schema.getSchema<any[]>("enum") ?? [];

          if (enumValues.length == 1) {
            return <Token>{JSON.stringify(enumValues[0])}</Token>;
          }

          let type: string = "any";

          if (enumValues.length > 0) {
            type = typeof enumValues[0];
          }

          return (
            <>
              <Token sx={{ fontWeight: "bold" }}>{type}</Token>
              <Indent>
                {enumValues.map((value: any, i) => (
                  <Annotation
                    key={value}
                    name={"enum"}
                    value={`${value}`}
                    extra={schema.getMeta<string[]>("enumLabels")?.[i] ? {
                      "label": JSON.stringify(schema.getMeta<string[]>("enumLabels")![i])
                    } : {}}
                  />
                ))}
              </Indent>
            </>
          );
        }
      }

      let [type, format, defaultValue] = [
        schema.type,
        schema.getSchema("format"),
        schema.getSchema("default")
      ];

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
          </Indent>
        </>
      );
    };
  }
);


function hasValidate(schema: AnyType) {
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
  ] as Array<keyof ValidatedSchemaProps>).some((key) => schema.getSchema(key));
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

export function getMax(schema: AnyType): string {
  if (schema.getSchema("maxProperties")) {
    return schema.getSchema("maxProperties")!;
  }
  if (schema.getSchema("maxItems")) {
    return schema.getSchema("maxItems")!;
  }
  if (schema.getSchema("maximum")) {
    return schema.getSchema("maximum")!;
  }
  if (schema.getSchema("maxLength")) {
    return schema.getSchema("maxLength")!;
  }

  if (schema.type === "string" && schema.getSchema("format") === "uint64") {
    return "19";
  }

  if (
    (schema.type === "number" || schema.type === "integer") &&
    schema.getSchema("format")
  ) {
    return `${
      Math.pow(2, Number(schema.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1
    }`;
  }

  return "+∞";
}

export function getMin(schema: AnyType): string {
  if (schema.getSchema("minProperties")) {
    return schema.getSchema("minProperties")!;
  }
  if (schema.getSchema("minItems")) {
    return schema.getSchema("minItems")!;
  }
  if (schema.getSchema("minimum")) {
    return schema.getSchema("minimum")!;
  }
  if (schema.getSchema("minLength")) {
    return schema.getSchema("minLength")!;
  }

  if (schema.type === "string") {
    return "0";
  }

  if (
    (schema.type === "number" || schema.type === "integer") && schema.getSchema("format")
  ) {
    return `${
      Math.pow(2, Number(schema.getSchema("format").replace(/[^0-9]/g, "")) - 1) - 1
    }`;
  }
  return "-∞";
}

export function displayValidate(schema: AnyType): string {
  if (schema.getSchema<string>("x-tag-validate")) {
    return schema.getSchema<string>("x-tag-validate")!;
  }

  if (!hasValidate(schema)) {
    return "";
  }

  if (schema.getSchema("pattern")) {
    return `@r/${String(schema.getSchema("pattern"))}/`;
  }

  return `@${schema.getSchema("exclusiveMinimum")} ? "(" : "["}${getMin(schema)},${getMax(schema)}${schema.getSchema("exclusiveMaximum") ? ")" : "]"}`;
}
