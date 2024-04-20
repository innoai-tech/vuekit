import { component$, render, rx, t } from "@innoai-tech/vuekit";
import { OpenAPIProvider } from "./OpenAPIProvider.tsx";
import { filter, switchMap } from "rxjs";
import { Box, styled } from "@innoai-tech/vueuikit";
import { ResponseView } from "./ResponseView.tsx";
import { RequestBuilder } from "./RequestBuilder.tsx";

export const OperationView = component$({
  operationId: t.string()
}, (props, {}) => {
  const openapi$ = OpenAPIProvider.use();

  const op$ = rx(
    props.operationId$,
    switchMap((operationId) => openapi$.operation$(operationId))
  );

  const opExists$ = rx(
    op$,
    filter((op): op is NonNullable<typeof op> => !!op)
  );

  const $heading = rx(
    opExists$,
    render((op) => {
      return (
        <OperationHeading sx={{
          containerStyle: ({
            "get": "sys.primary-container",
            "post": "sys.success-container",
            "put": "sys.warning-container",
            "delete": "sys.error-container"
          } as const)[op.method] ?? "sys.secondary-container"

        }}>
          <div data-operation-method>
            {op.method}
          </div>
          <div data-operation-desc>
            <div data-operation-path>
              {op.path}
            </div>
            <div data-operation-summary>
              {op.summary} {op.operationId != op.summary ? op.operationId : ""}
            </div>
          </div>
        </OperationHeading>
      );
    })
  );

  const $desc = rx(
    opExists$,
    render((op) => {
      return <span>{op.description}</span>;
    })
  );

  const $requestBuilder = rx(
    opExists$,
    render((op) => {
      return (
        <RequestBuilder
          key={op.operationId}
          operation={op}
        >
          <>
            {Object.entries(op.responses ?? {}).map(([code, response]) => {
              return (
                <ResponseView key={code} code={code} response={response} />
              );
            })}
          </>
        </RequestBuilder>
      );
    })
  );

  return rx(
    op$,
    render((op) => {
      if (!op) {
        return null;
      }
      return (
        <OperationContainer key={op.operationId}>
          {$heading}
          <Box sx={{
            flex: 1,
            overflow: "hidden",
            py: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch"
          }}>
            {$desc}
            <Box sx={{
              flex: 1,
              overflow: "auto"
            }}>
              {$requestBuilder}
            </Box>
          </Box>
        </OperationContainer>
      );
    })
  );
});

const OperationContainer = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch"
});

const OperationHeading = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "100%",
  px: 16,
  py: 8,
  gap: 16,

  $data_operation_method: {
    textTransform: "uppercase",
    fontSize: 24,
    fontFamily: "code"
  },

  $data_operation_path: {
    fontFamily: "code"
  },

  $data_operation_summary: {
    opacity: 0.8,
    textStyle: "sys.body-small"
  }
});

