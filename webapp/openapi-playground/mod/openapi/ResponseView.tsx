import { component$, JSONSchemaDecoder, refName, t } from "@innoai-tech/vuekit";
import type { Response } from "./models";
import { Box, styled } from "@innoai-tech/vueuikit";
import { Indent, Line, PropName, SchemaView, Token } from "./SchemaView.tsx";
import { OpenAPIProvider } from "./OpenAPIProvider.tsx";
import { isUndefined, uniq } from "@innoai-tech/lodash";

function isErrorCode(c: number | string) {
  try {
    return Number(c) >= 400;
  } catch (err) {
    return false;
  }
}

export const ResponseView = component$({
  code: t.custom<number | string>(),
  response: t.custom<Response>()
}, (props) => {
  const openapi$ = OpenAPIProvider.use();

  return () => {
    return (
      <ResponseSection>
        <ResponseStatusCode data-failed={isErrorCode(props.code)}>
          {props.code}
        </ResponseStatusCode>
        <Box sx={{ pl: "4em" }}>
          <>
            {uniq((props.response["x-status-return-errors"] ?? []) as string[])
              .map((statusErr: string) => {
                return parseStatusErr(statusErr);
              })
              .map((statusErr) => {
                if (statusErr) {
                  return (
                    <Box sx={{ mb: 16 }}>
                      <Line spacing={0}>
                        <Token>{"{"}&nbsp;</Token>
                        <Indent>
                          {Object.entries(statusErr).map(([key, value]) => {
                            if (key === "code") {
                              return null;
                            }

                            return (
                              <Line>
                                <PropName>{key}</PropName>
                                <Token>:&nbsp;</Token>
                                <Token>{JSON.stringify(value)}</Token>
                              </Line>
                            );
                          })}
                        </Indent>
                        <Token>&nbsp;{"}"}</Token>
                      </Line>
                    </Box>
                  );
                }

                return null;
              })
            }
          </>
          <>
            {Object.entries(props.response.content ?? {}).map(([contentType, { schema }]) => (
              <ResponseSchema>
                <Line spacing={0}>
                  <SchemaView
                    schema={JSONSchemaDecoder.decode(schema, (ref) => {
                      return [
                        openapi$.schema(ref) ?? {},
                        refName(ref)
                      ];
                    })}
                  />

                </Line>
                <div data-content-type>
                  {contentType}
                </div>
              </ResponseSchema>
            ))}
          </>
        </Box>
      </ResponseSection>
    );
  };
});

type StatusErr = {
  key: string,
  msg?: string,
  desc?: string,
}


// x,v,"c,d" => x v "c,d"
function splitCsv(str: string) {
  return str.split(",").reduce((accum, curr: string) => {
      if (accum.joining) {
        accum.values[accum.values.length - 1] += "," + curr;
      } else {
        accum.values.push(curr);
      }
      if (curr.split("\"").length % 2 == 0) {
        accum.joining = !accum.joining;
      }
      return accum;
    }, {
      values: [] as string[],
      joining: false
    }
  ).values;
}

function parseStatusErr(statusErr: string = ""): StatusErr | null {
  const i = statusErr.indexOf("{");
  if (i > -1) {
    return splitCsv(statusErr.slice(i + 1, statusErr.length - 1))
      .reduce((ret, keyValue) => {
        const i = keyValue.indexOf("=");
        if (i < 0) {
          return ret;
        }

        const key = keyValue.slice(0, i);
        const value = keyValue.slice(i + 1);

        if (isUndefined(key) || isUndefined(value)) {
          return ret;
        }

        return {
          ...ret,
          [key]: JSON.parse(value)
        };
      }, {
        key: statusErr.slice(0, i)
      }) as { key: string, msg?: string, desc?: string };
  }
  return null;
}

const ResponseSection = styled("section")({});

const ResponseStatusCode = styled("div")({
  fontSize: 18,
  fontFamily: "code",
  color: "sys.success",

  py: 12,

  pos: "sticky",
  top: 0,

  _data_failed__true: {
    color: "sys.error"
  }
});

const ResponseSchema = styled("section")({
  pos: "relative",

  $data_content_type: {
    pos: "absolute",
    right: 0,
    top: 0,
    fontFamily: "code",
    opacity: 0.3
  }
});

