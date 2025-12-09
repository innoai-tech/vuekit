import { component$, JSONSchemaDecoder, refName } from "@innoai-tech/vuekit";
import type { Response } from "./models";
import { Box, styled } from "@innoai-tech/vueuikit";
import { Line, SchemaView } from "./SchemaView.tsx";
import { OpenAPIProvider } from "./OpenAPIProvider.tsx";
import { isUndefined, uniq } from "es-toolkit/compat";

function isErrorCode(c: number | string) {
  try {
    return Number(c) >= 400;
    // oxlint-disable-next-line no-unused-vars
  } catch (err) {
    return false;
  }
}

export const ResponseView = component$<{
  code: number | string;
  response: Response;
}>((props) => {
  const openapi$ = OpenAPIProvider.use();

  return () => {
    const statusErrors = uniq((props.response["x-status-return-errors"] ?? []) as string[]).map(
      (statusErr: string) => {
        return parseStatusErr(statusErr);
      },
    );

    return (
      <ResponseSection>
        <ResponseStatusCode data-failed={isErrorCode(props.code)}>{props.code}</ResponseStatusCode>
        <Box sx={{ pl: "4em" }}>
          <>
            {Object.entries(props.response.content ?? {}).map(([contentType, { schema }]) => (
              <ResponseSchema>
                <Line spacing={0}>
                  <SchemaView
                    schema={JSONSchemaDecoder.decode(schema, (ref) => {
                      return [openapi$.schema(ref) ?? {}, refName(ref)];
                    })}
                  />
                </Line>
                <div data-content-type>{contentType}</div>
              </ResponseSchema>
            ))}
          </>
          <>
            {statusErrors.length > 0 ? (
              <Box
                sx={{
                  mt: 16,
                  containerStyle: "sys.surface-container",
                  px: 12,
                  py: 16,
                  rounded: "xs",
                }}
              >
                <Box sx={{ pb: 8 }}>
                  <b>
                    <small>可能错误码</small>:
                  </b>
                </Box>
                <Table>
                  <TableCell sx={{ textStyle: "sys.label-small" }}>
                    <code>{`errors[*].code`}</code>
                  </TableCell>
                  <TableCell sx={{ textStyle: "sys.label-small" }}>
                    <code>{`errors[*].message`}</code>
                  </TableCell>
                  {statusErrors.map((statusErr) => {
                    if (statusErr) {
                      return (
                        <>
                          <TableCell
                            sx={{
                              color: "sys.primary",
                              textStyle: "sys.label-small",
                              fontWeight: "bold",
                            }}
                          >
                            <code>{JSON.stringify(statusErr.code)}</code>
                          </TableCell>
                          <TableCell>{statusErr.message}</TableCell>
                        </>
                      );
                    }
                    return null;
                  })}
                </Table>
              </Box>
            ) : null}
          </>
        </Box>
      </ResponseSection>
    );
  };
});

const Table = styled("div")({
  textStyle: "sys.label-medium",
  display: "grid",
  gap: 8,
  width: "100%",
  gridTemplateColumns: "min-content 1fr",
  gridAutoColumns: "auto",
});

const TableCell = styled("div")({});

type StatusErr = {
  code: string;
  message?: string;
};

// x,v,"c,d" => x v "c,d"
function splitCsv(str: string) {
  return str.split(",").reduce(
    (accum, curr: string) => {
      if (accum.joining) {
        accum.values[accum.values.length - 1] += "," + curr;
      } else {
        accum.values.push(curr);
      }
      if (curr.split('"').length % 2 == 0) {
        accum.joining = !accum.joining;
      }
      return accum;
    },
    {
      values: [] as string[],
      joining: false,
    },
  ).values;
}

function parseStatusErr(statusErr: string = ""): StatusErr | null {
  const i = statusErr.indexOf("{");
  if (i > -1) {
    return splitCsv(statusErr.slice(i + 1, statusErr.length - 1)).reduce(
      (ret, keyValue) => {
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
          [key]: JSON.parse(value),
        };
      },
      {
        code: statusErr.slice(0, i),
      },
    ) as { code: string; message?: string; [k: string]: any };
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
    color: "sys.error",
  },
});

const ResponseSchema = styled("section")({
  pos: "relative",

  $data_content_type: {
    pos: "absolute",
    right: 0,
    top: 0,
    fontFamily: "code",
    opacity: 0.3,
  },
});
