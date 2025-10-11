import { type FetcherResponse, paramsSerializer, type RequestConfig } from "@innoai-tech/fetcher";
import { Box } from "@innoai-tech/vueuikit";
import { component, t, type VNodeChild } from "@innoai-tech/vuekit";
import { isArray, isObject } from "es-toolkit/compat";

const getDefaultHeads = (): Record<string, any> => ({
  "User-Agent": navigator.userAgent,
  Origin: location.origin,
  Referer: `${location.origin}${location.pathname}`
});

export const HeadRow = ({ field, value }: {
  field: string;
  value: string;
}) => (
  <Box component={"span"} sx={{ display: "block" }}>
    <Box component={"span"} sx={{ fontWeight: "bold", marginRight: "0.5em" }}>
      {field}:
    </Box>
    <span>{value}</span>
  </Box>
);

const HTTPFirstLine = ({ method, url, params }: RequestConfig<any>) => {
  const queryString = paramsSerializer(params);

  return (
    <Box component={"span"} sx={{ fontWeight: "bold" }}>
      {`${method.toUpperCase()} `}
      <Box component={"span"} sx={{ fontWeight: "medium" }}>
        {url}{queryString ? `?${queryString}` : ""}
      </Box>
      {` HTTP/*`}
    </Box>
  );
};

const displayMultipart = (boundary: string, data: Record<string, any>) => {
  const getPart = (k: string, v: any): string => {
    if (v instanceof File || v instanceof Blob) {
      return `${boundary}
Content-Disposition: form-data; name="${k}"${
        (v as File).name ? `; filename="${(v as File).name}"` : ""
      }
Content-Type: ${v.type}

[File Content]
`;
    }

    if (isArray(v)) {
      return v.map((item) => getPart(k, item)).join("\n");
    }

    return `${boundary}
Content-Disposition: form-data; name="${k}"

${isObject(v) ? JSON.stringify(v) : String(v)}
`;
  };

  return (
    Object.entries(data).map(([k, v]) => getPart(k, v)).join("\n") + `${boundary}--`
  );
};

function stringifyBody(request: RequestConfig<any>) {
  if (isContentTypeMultipartFormData(request.headers)) {
    const boundary =
      "----WebKitFormBoundaryfakefakefakefakefakefakefakefakefake";

    request.headers = {
      ...request.headers,
      "Content-Type": `multipart/form-data; boundary=${boundary}`
    };

    return displayMultipart(boundary, request.body);
  }

  if (isContentTypeFormURLEncoded(request.headers)) {
    return paramsSerializer(request.body);
  }

  if (isContentTypeJSON(request.headers)) {
    return JSON.stringify(request.body, null, 2);
  }

  return request.body;
}

const CodeView = component(
  {
    $default: t.custom<VNodeChild>().optional()
  },
  ({}, { slots }) => {
    return () => (
      <Box
        sx={{
          containerStyle: "sys.surface-container",
          rounded: "xs",
          width: "100%",
          overflow: "auto",
          py: 4,
          px: 8
        }}
      >
        <Box
          component={"pre"}
          sx={{
            padding: 4,
            margin: 0,
            textStyle: "sys.body-small",
            fontFamily: "code"
          }}
        >
          <code>{slots.default?.()}</code>
        </Box>
      </Box>
    );
  }
);

export const HttpRequest = component(
  {
    request: t.custom<RequestConfig<any>>()
  },
  (props) => {
    return () => {
      const request = props.request;

      return (
        <CodeView>
          <HTTPFirstLine {...request} />
          <>
            {Object.entries({
              ...getDefaultHeads(),
              ...request.headers
            })
              .toSorted()
              .map(
                ([key, value]) => (
                  <HeadRow key={key} field={key} value={value} />
                )
              )}
          </>
          {request.body && (
            <>
              <br />
              {stringifyBody(request)}
            </>
          )}
        </CodeView>
      );
    };
  }
);

const toDataURI = (buffer: any, contentType: string) => {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let len = bytes.byteLength, i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]!);
  }
  return `data:${contentType};base64,${btoa(binary)}`;
};

export const HTTPResponse = component(
  {
    response: t.custom<FetcherResponse<any, any>>()
  },
  (props, {}) => {
    return () => {
      const response = props.response;

      if (isContentTypeImage(response.headers)) {
        return (
          <div>
            <img
              src={toDataURI(response.body, getContentType(response.headers))}
              alt={""}
            />
          </div>
        );
      }

      console.log(response)

      return (
        <CodeView>
          <span>HTTP/* {response.status}</span>
          <br />
          {response.headers && (
            <>
              {Object.entries(response.headers).map(([key, value]) => (
                <HeadRow key={key} field={key} value={value} />
              ))}
            </>
          )}
          <br />
          {response.body
            ? isContentTypeJSON(response.headers)
              ? JSON.stringify(response.body, null, 2)
              : `${response.body}`
            : null}
        </CodeView>
      );
    };
  }
);

function getContentType(headers: Record<string, any> = {}): string {
  for (const [k, v] of Object.entries(headers)) {
    if (k.toLowerCase() == "content-type") {
      return v;
    }
  }
  return "";
}


function isContentTypeMultipartFormData(headers: any) {
  return getContentType(headers).includes("multipart/form-data");
}

const isContentTypeJSON = (headers: any) =>
  getContentType(headers).includes("application/json");

function isContentTypeFormURLEncoded(headers: any) {
  return getContentType(headers).includes("application/x-www-form-urlencoded");
}

function isContentTypeImage(headers: any) {
  return getContentType(headers).includes("image/");
}

