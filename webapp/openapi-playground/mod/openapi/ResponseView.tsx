import { component$, JSONSchemaDecoder, refName, t } from "@innoai-tech/vuekit";
import type { Response } from "./models";
import { Box, styled } from "@innoai-tech/vueuikit";
import { Line, PropName, SchemaView, Indent, Token } from "./SchemaView.tsx";
import { isUndefined } from "./util/typed.ts";
import { OpenAPIProvider } from "./OpenAPIProvider.tsx";

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
            {props.response["x-status-return-errors"]
              ?.map((statusErr: string) => {
                return parseStatusErr(statusErr);
              })
              .map((statusErr: StatusErr) => {
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
                                <Token>{value}</Token>
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

function parseStatusErr(statusErr: string = ""): StatusErr | null {
  if (statusErr.startsWith("StatusError{")) {
    return statusErr.slice("StatusError{".length, statusErr.length - 1).split(",").reduce((ret, keyValue) => {
      const [k, value] = keyValue.split("=", 2);

      if (isUndefined(k) || isUndefined(value)) {
        return ret;
      }

      return {
        ...ret,
        [k]: value
      };
    }, {}) as { key: string, msg?: string, desc?: string };
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

