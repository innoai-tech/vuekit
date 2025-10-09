import {
  component,
  component$,
  createProvider,
  observableRef,
  RouterLink,
  Schema,
  t,
  type Type,
  type VNodeChild,
} from "@innoai-tech/vuekit";
import { isUndefined } from "es-toolkit/compat";
import { Box, styled } from "@innoai-tech/vueuikit";
import { Markdown } from "@innoai-tech/vuemarkdown";
import { Dialog, Icon, Tooltip } from "@innoai-tech/vuematerial";
import { mdiHelpBox } from "@mdi/js";

export const Token = styled("div")({
  display: "inline-table",
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 11,
  lineHeight: 14,
});

export const PropName = styled<
  {
    deprecated?: boolean;
    optional?: boolean;
    nullable?: boolean;
  },
  "div"
>("div")({
  display: "inline-table",
  textStyle: "sys.label-small",
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: 11,
  lineHeight: 14,

  color: "sys.primary",

  _deprecated: {
    textDecoration: "line-through",
  },

  _nullable: {
    "&:after": { content: `"??"`, color: "sys.error" },
  },

  _optional: {
    "&:after": { content: `"?"`, color: "sys.secondary" },
  },
});

export const Line = styled<
  {
    spacing?: number;
    $default?: VNodeChild;
  },
  "div"
>("div", (props, { slots }) => {
  const i = IntentContextProvider.use();

  return (Root) => (
    <Root
      style={{
        paddingLeft: `${i.indent}em`,
        marginTop: (props.spacing ?? 0) * 0.5,
      }}
    >
      {slots.default?.()}
    </Root>
  );
})({
  position: "relative",
  display: "block",
});

export const Description = styled<
  {
    schema: Type;
  },
  "div"
>("div", (props, {}) => {
  return (Root) => {
    const title = Schema.metaProp(props.schema, "title") ?? "";
    const description = Schema.metaProp(props.schema, "description") ?? "";

    return (
      <Root>
        {title}{" "}
        {description ? (
          <Tooltip
            $title={
              <MarkdownContainer>
                <Markdown text={description} />
              </MarkdownContainer>
            }
          >
            <Icon path={mdiHelpBox} />
          </Tooltip>
        ) : null}
      </Root>
    );
  };
})({
  position: "relative",
  pt: 8,
  display: "flex",
  alignItems: "center",
  gap: 4,

  "&::before": {
    content: `"// "`,
    fontFamily: "code",
  },

  textStyle: "sys.body-small",
  fontSize: 10,
  lineHeight: 12,

  [`${Icon}`]: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
});

export const MarkdownContainer = styled("div")({
  textStyle: "sys.body-small",

  "& p": {
    my: 1,

    wordBreak: "keep-all",
    whiteSpace: "nowrap",
    opacity: 0.7,
  },

  "& code": {
    wordBreak: "keep-all",
    whiteSpace: "nowrap",
  },
});

const Annotation = ({
  name,
  value,
  extra,
}: {
  name: string;
  value: any;
  extra?: Record<string, any>;
}) => {
  if (value == "") {
    return null;
  }

  return (
    <Line>
      <Token
        sx={{
          opacity: 0.7,
          fontSize: "0.9em",
          wordBreak: "keep-all",
          whiteSpace: "nowrap",
        }}
      >
        <Token sx={{ color: "sys.primary" }}>{`@${name}(`}</Token>
        {`${value}`}
        {Object.entries(extra ?? {}).map(([k, v]) => {
          if (isUndefined(v)) {
            return null;
          }
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
      indent: 0,
    };
  },
  {
    name: "IntentContext",
  },
);

export const Indent = component<{
  $default?: VNodeChild;
}>(({}, { slots }) => {
  const i = IntentContextProvider.use();

  return () => (
    <IntentContextProvider
      value={{
        indent: i.indent + 1,
      }}
    >
      {slots.default?.()}
    </IntentContextProvider>
  );
});

class Node {
  constructor(
    public id: string,
    public parent?: Node,
  ) {}

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
  schema: Type;
}>((props) => {
  const node = SchemaRenderProvider.use();
  const ident = IntentContextProvider.use();

  const open$ = observableRef(false);

  return () => {
    let schema = props.schema;

    const id = Schema.schemaProp(props.schema, "$ref");

    schema = Schema.schemaProp(props.schema, Schema.unwrap)();

    const needID =
      schema.type == "intersection" ||
      schema.type == "object" ||
      schema.type == "union" ||
      schema.type == "record" ||
      schema.type == "array" ||
      schema.type == "union";

    const $inline = node.safe(id) && (
      <>
        <span>&nbsp;</span>
        <SchemaView schema={schema} />
      </>
    );

    return (
      <SchemaRenderProvider value={node.child(id)}>
        {needID ? (
          ident.indent < 3 ? (
            <>
              <RouterLink to={`#${id}`} data-index={ident.indent}>
                <Token id={id}>{id}</Token>
              </RouterLink>
              {$inline}
            </>
          ) : (
            <>
              <Box
                component={RouterLink as any}
                sx={{}}
                to={`#${id}`}
                data-index={ident.indent}
                onClick={(e: any) => {
                  if (node.safe(id)) {
                    e.preventDefault();
                    e.stopPropagation();

                    open$.next(true);
                  }
                }}
              >
                <Token id={id}>{id}</Token>
              </Box>
              {node.safe(id) && (
                <Dialog
                  isOpen={open$.value}
                  onClose={() => {
                    open$.next(false);
                  }}
                >
                  <DialogContainer>
                    <Line>
                      <Token>{id}</Token>
                      <IntentContextProvider value={{ indent: 0 }}>
                        {$inline}
                      </IntentContextProvider>
                    </Line>
                  </DialogContainer>
                </Dialog>
              )}
            </>
          )
        ) : (
          $inline
        )}
      </SchemaRenderProvider>
    );
  };
});

const DialogContainer = styled("div")({
  display: "flex",
  containerStyle: "sys.surface",
  height: "100vh",
  width: "36vw",
  roundedLeft: "sm",
  px: 16,
  py: 36,
  top: 0,
  right: 0,
  position: "absolute",
  overflow: "auto",
});

export const SchemaView = component$<{
  schema: Type;
}>((props) => {
  const schema = props.schema;

  if (Schema.schemaProp(schema, "$ref")) {
    return <SchemaViewLink schema={schema} />;
  }

  return () => {
    switch (schema.type) {
      case "union":
        return (
          <>
            {Schema.schemaProp<Type[]>(schema, "oneOf")?.map((s, i) => {
              return (
                <>
                  {i > 0 && <Token>&nbsp;{" | "}&nbsp;</Token>}
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
              ?.filter((s) => !Object.keys(s).length)
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
      case "array":
        return (
          <Token sx={{ wordBreak: "keep-all", whiteSpace: "nowrap" }}>
            <Token>{"Array<"}</Token>
            <SchemaView
              schema={Schema.schemaProp(schema, "items") ?? t.any()}
            />
            <Token>{">"}</Token>
          </Token>
        );
      case "object":
        return (
          <>
            <Token>{"{"}</Token>
            <Indent>
              <>
                {Object.entries(
                  (Schema.schemaProp(schema, "properties") ?? {}) as Record<
                    string,
                    Type
                  >,
                ).map(([propName, propSchema]) => {
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
                            optional={
                              !(
                                Schema.schemaProp(schema, "required") ?? []
                              ).includes(propName)
                            }
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
                      schema={
                        Schema.schemaProp(schema, "propertyNames") ?? t.string()
                      }
                    />
                    <Token sx={{ mr: 1 }}>{"]:"}&nbsp;</Token>
                    <SchemaView
                      schema={
                        Schema.schemaProp(schema, "additionalProperties") ??
                        t.any()
                      }
                    />
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
                  extra={
                    Schema.metaProp<string[]>(schema, "enumLabels")?.[i]
                      ? {
                          label: JSON.stringify(
                            Schema.metaProp<string[]>(schema, "enumLabels")![i],
                          ),
                        }
                      : {}
                  }
                />
              ))}
            </Indent>
          </>
        );
      }
    }

    let [type, format, defaultValue] = [
      schema.type,
      Schema.metaProp(schema, "format"),
      Schema.metaProp(schema, "default"),
    ];

    return (
      <>
        <Token sx={{ fontWeight: "bold" }}>{type || "any"}</Token>
        <Indent>
          {format && <Annotation name={"format"} value={format} />}
          {!isUndefined(defaultValue) && (
            <Annotation name={"default"} value={defaultValue} />
          )}
          {validateProps.map((prop) => {
            const v = Schema.schemaProp(schema, prop);
            if (isUndefined(v)) {
              return null;
            }
            if (prop == "pattern") {
              return (
                <Annotation
                  name={prop}
                  value={v}
                  extra={{
                    errMsg: Schema.metaProp(schema, "x-pattern-err-msg"),
                  }}
                />
              );
            }

            return <Annotation name={prop} value={v} />;
          })}
        </Indent>
      </>
    );
  };
});

const validateProps = [
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
  "minProperties",
];

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
