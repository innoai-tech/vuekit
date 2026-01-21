import {
  component$,
  ImmerBehaviorSubject,
  render,
  rx,
} from "@innoai-tech/vuekit";
import { OpenAPIProvider } from "./OpenAPIProvider.tsx";
import { filter, switchMap } from "rxjs";
import { Box, styled } from "@innoai-tech/vueuikit";
import { ResponseView } from "./ResponseView.tsx";
import { RequestBuilder } from "./RequestBuilder.tsx";
import { Markdown } from "@innoai-tech/vuemarkdown";
import { DatabaseErContainer } from "./DatabaseErView.tsx";
import { PreWithMermaid } from "./MermaidView.tsx";
import { Dialog, Icon, IconButton } from "@innoai-tech/vuematerial";
import { mdiHelp } from "@mdi/js";
import { MarkdownContainer } from "./SchemaView.tsx";

export const OperationView = component$<{
  operationId: string;
}>((props, _) => {
  const openapi$ = OpenAPIProvider.use();

  const op$ = rx(
    props.operationId$,
    switchMap((operationId) => openapi$.operation$(operationId)),
  );

  const opExists$ = rx(
    op$,
    filter((op): op is NonNullable<typeof op> => !!op),
  );

  const open$ = ImmerBehaviorSubject.seed(false);

  const $descInDialog = rx(
    opExists$,
    render((op) => {
      return op.description ? (
        <Markdown
          text={op.description}
          components={{
            pre: PreWithMermaid,
          }}
        />
      ) : null;
    }),
  );

  const $dialog = rx(
    open$,
    render((open) => {
      return (
        <Dialog
          isOpen={open}
          onClose={() => {
            open$.next(false);
          }}
        >
          <DialogContainer>
            <MarkdownContainer>{$descInDialog}</MarkdownContainer>
          </DialogContainer>
        </Dialog>
      );
    }),
  );

  const DialogContainer = styled("div")({
    containerStyle: "sys.surface",
    width: "95vw",
    maxHeight: "98vh",
    roundedBottom: "sm",
    px: 32,
    pt: 16,
    py: 48,
    top: 0,
    position: "absolute",
    overflow: "auto",

    pre: {
      width: "100%",
    },

    "svg,img": {
      display: "block",
      m: "0 auto",
    },
  });

  const $descBtn = rx(
    opExists$,
    render((op) => {
      return op.description ? (
        <IconButton
          onClick={() => {
            open$.next(true);
          }}
        >
          <Icon path={mdiHelp} />
          {$dialog}
        </IconButton>
      ) : null;
    }),
  );

  const $requestBuilder = rx(
    opExists$,
    render((op) => {
      return (
        <RequestBuilder key={op.operationId} operation={op}>
          <>
            {Object.entries(op.responses ?? {}).map(([code, response]) => {
              return (
                <ResponseView key={code} code={code} response={response} />
              );
            })}
          </>
        </RequestBuilder>
      );
    }),
  );

  const $heading = rx(
    opExists$,
    render((op) => {
      return (
        <OperationHeading
          sx={{
            containerStyle:
              (
                {
                  get: "sys.primary-container",
                  post: "sys.success-container",
                  put: "sys.warning-container",
                  delete: "sys.error-container",
                } as const
              )[op.method] ?? "sys.secondary-container",
          }}
        >
          <div data-operation-method>{op.method}</div>
          <div data-operation-desc>
            <div data-operation-path>{op.path}</div>
            <div data-operation-summary>
              {op.summary} {op.operationId != op.summary ? op.operationId : ""}
            </div>
          </div>
          <Box sx={{ flex: 1 }} />
          {$descBtn}
        </OperationHeading>
      );
    }),
  );

  return rx(
    op$,
    render((op) => {
      if (!op) {
        return null;
      }
      if (op.operationId == "SycDatabaseEr") {
        return (
          <OperationContainer key={op.operationId}>
            {$heading}
            <OperationMain>
              <DatabaseErContainer op={op} />
            </OperationMain>
          </OperationContainer>
        );
      }

      return (
        <OperationContainer key={op.operationId}>
          {$heading}
          <OperationMain>
            <Box
              sx={{
                flex: 1,
                overflow: "auto",
              }}
            >
              {$requestBuilder}
            </Box>
          </OperationMain>
        </OperationContainer>
      );
    }),
  );
});

const OperationContainer = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
});

const OperationMain = styled("div")({
  flex: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
});

const OperationHeading = styled("summary")({
  display: "flex",
  alignItems: "center",
  width: "100%",
  px: 16,
  py: 8,
  gap: 16,

  $data_operation_method: {
    textTransform: "uppercase",
    fontSize: 24,
    fontFamily: "code",
  },

  $data_operation_path: {
    fontFamily: "code",
  },

  $data_operation_summary: {
    opacity: 0.8,
    textStyle: "sys.body-small",
  },
});
