import { component$, t } from "@innoai-tech/vuekit";
import type { Response } from "./models";
import { Box, styled } from "@innoai-tech/vueuikit";
import { Line, SchemaView } from "./SchemaView.tsx";

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
  return () => {
    return (
      <ResponseSection>
        <ResponseStatusCode data-failed={isErrorCode(props.code)}>
          {props.code}
        </ResponseStatusCode>
        <Box sx={{ pl: "4em" }}>
          {Object.entries(props.response.content ?? {}).map(([contentType, { schema }]) => (
            <ResponseSchema>
              <Line spacing={0}>
                <SchemaView schema={schema} />
              </Line>
              <div data-content-type>
                {contentType}
              </div>
            </ResponseSchema>
          ))}
        </Box>
      </ResponseSection>
    );
  };
});

const ResponseSection = styled("section")({});

const ResponseStatusCode = styled("div")({
  fontSize: 18,
  fontFamily: "code",
  color: "sys.success",

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

