import {
  component,
  component$,
  createProvider,
  RouterLink,
  Schema,
  t,
  type Type,
  type VNodeChild
} from "@innoai-tech/vuekit";
import { isUndefined } from "@innoai-tech/lodash";
import { styled } from "@innoai-tech/vueuikit";
import { Markdown } from "@innoai-tech/vuemarkdown";
import { Icon, Tooltip } from "@innoai-tech/vuematerial";
import { mdiHelpBox } from "@mdi/js";

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
  schema: Type
}, "div">("div", (props, {}) => {
    return (Root) => {
      const title = Schema.metaProp(props.schema, "title") ?? "";
      const description = Schema.metaProp(props.schema, "description") ?? "";

      if (!(title || description)) {
        return null;
      }

      return (
        <Root>
          {title} {description ? (
          <Tooltip title={
            <MarkdownContainer>
              <Markdown text={description} />
            </MarkdownContainer>
          }>
            <Icon path={mdiHelpBox} />
          </Tooltip>
        ) : null}
        </Root>
      );
    };
  }
)({
  position: "relative",
  pt: 8,
  display: "flex",
  alignItems: "center",
  gap: 4,

  "&::before": {
    content: `"// "`,
    fontFamily: "code"
  },

  textStyle: "sys.body-small",
  fontSize: 10,
  lineHeight: 12,

  [`${Icon}`]: {
    width: 12,
    height: 12,
    overflow: "hidden"
  }
});

const MarkdownContainer = styled("div")({
  textStyle: "sys.body-small",

  "& p": {
    my: 1,

    wordBreak: "keep-all",
    whiteSpace: "nowrap",
    opacity: 0.7
  },

  "& code": {
    wordBreak: "keep-all",
    whiteSpace: "nowrap"
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
  schema: Type,
}>((props) => {
  const node = SchemaRenderProvider.use();

  return () => {
    let schema = props.schema;

    const id = Schema.schemaProp(props.schema, "$ref");

    schema = Schema.schemaProp(props.schema, Schema.unwrap)();

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
  schema: Type,
}>((props) => {
    const schema = props.schema;

    if (Schema.schemaProp(schema, "$ref")) {
      return (
        <SchemaViewLink schema={schema} />
      );
    }

    return () => {
      switch (schema.type) {
        case "union":
          return (
            <>
              {Schema.schemaProp<Type[]>(schema, "oneOf")?.map((s, i) => {
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
              {Schema.schemaProp<Type[]>(schema, "allOf")
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
              <SchemaView schema={Schema.schemaProp(schema, "items") ?? t.any()} />
              <Token>{">"}</Token>
            </Token>
          );
        case "object":
          return (
            <>
              <Token>{"{"}</Token>
              <Indent>
                <>
                  {Object.entries((Schema.schemaProp(schema, "properties") ?? {}) as Record<string, Type>).map(([propName, propSchema]) => {
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
                              nullable={Schema.schemaProp(schema, "nullable")}
                              deprecated={Schema.schemaProp(schema, "deprecated")}
                              optional={!(Schema.schemaProp(schema, "required") ?? []).includes(propName)}
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
              {Schema.schemaProp(schema, "additionalProperties") && (
                <>
                  <Indent>
                    <Line>
                      <Token sx={{ mr: 1 }}>{"[K:"}&nbsp;</Token>
                      <SchemaView
                        schema={Schema.schemaProp(schema, "propertyNames") ?? t.string()}
                      />
                      <Token sx={{ mr: 1 }}>{"]:"}&nbsp;</Token>
                      <SchemaView schema={Schema.schemaProp(schema, "additionalProperties") ?? t.any()} />
                    </Line>
                  </Indent>
                </>
              )}
              <Token>{"}"}</Token>
            </>
          );
        case "enums": {
          const enumValues = Schema.schemaProp<any[]>(schema, "enum") ?? [];

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
                    extra={Schema.metaProp<string[]>(schema, "enumLabels")?.[i] ? {
                      "label": JSON.stringify(Schema.metaProp<string[]>(schema, "enumLabels")![i])
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
        Schema.schemaProp(schema, "format"),
        Schema.schemaProp(schema, "default")
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


function hasValidate(schema: Type) {
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
  ] as Array<keyof ValidatedSchemaProps>).some((key) => Schema.schemaProp(schema, key));
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

export function getMax(schema: Type): string {
  if (Schema.schemaProp(schema, "maxProperties")) {
    return Schema.schemaProp(schema, "maxProperties")!;
  }
  if (Schema.schemaProp(schema, "maxItems")) {
    return Schema.schemaProp(schema, "maxItems")!;
  }
  if (Schema.schemaProp(schema, "maximum")) {
    return Schema.schemaProp(schema, "maximum")!;
  }
  if (Schema.schemaProp(schema, "maxLength")) {
    return Schema.schemaProp(schema, "maxLength")!;
  }

  if (schema.type === "string" && Schema.schemaProp(schema, "format") === "uint64") {
    return "19";
  }

  if (
    (schema.type === "number" || schema.type === "integer") &&
    Schema.schemaProp(schema, "format")
  ) {
    return `${
      Math.pow(2, Number(Schema.schemaProp(schema, "format").replace(/[^0-9]/g, "")) - 1) - 1
    }`;
  }

  return "+∞";
}

export function getMin(schema: Type): string {
  if (Schema.schemaProp(schema, "minProperties")) {
    return Schema.schemaProp(schema, "minProperties")!;
  }
  if (Schema.schemaProp(schema, "minItems")) {
    return Schema.schemaProp(schema, "minItems")!;
  }
  if (Schema.schemaProp(schema, "minimum")) {
    return Schema.schemaProp(schema, "minimum")!;
  }
  if (Schema.schemaProp(schema, "minLength")) {
    return Schema.schemaProp(schema, "minLength")!;
  }

  if (schema.type === "string") {
    return "0";
  }

  if (
    (schema.type === "number" || schema.type === "integer") && Schema.schemaProp(schema, "format")
  ) {
    return `${
      Math.pow(2, Number(Schema.schemaProp(schema, "format").replace(/[^0-9]/g, "")) - 1) - 1
    }`;
  }
  return "-∞";
}

export function displayValidate(schema: Type): string {
  if (!hasValidate(schema)) {
    return "";
  }

  if (Schema.schemaProp(schema, "pattern")) {
    return `@r/${String(Schema.schemaProp(schema, "pattern"))}/`;
  }

  return `@${Schema.schemaProp(schema, "exclusiveMinimum")} ? "(" : "["}${getMin(schema)},${getMax(schema)}${Schema.schemaProp(schema, "exclusiveMaximum") ? ")" : "]"}`;
}
