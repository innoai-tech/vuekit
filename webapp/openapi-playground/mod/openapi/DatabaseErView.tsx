import { component$, ImmerBehaviorSubject, rx } from "@innoai-tech/vuekit";
import type { OperationWithMethodPath } from "./models";
import { OpenAPIProvider } from "./OpenAPIProvider.tsx";
import { onMounted } from "vue";
import { alpha, Box, styled, variant } from "@innoai-tech/vueuikit";
import { Dialog, Icon, mdiKey, Tooltip } from "@innoai-tech/vuematerial";
import { mdiHelpBox, mdiKeyOutline } from "@mdi/js";
import { MarkdownContainer } from "./SchemaView.tsx";
import { Markdown } from "@innoai-tech/vuemarkdown";

export type ErDatabase = {
  name: string;
  tables: Record<string, ErTable>;
};

export type ErTable = {
  title?: string;
  description?: string;
  columns: Record<string, ErColumn>;
  constraints: Record<string, ErConstraint>;
};

export type ErColumn = {
  type: string;
  title?: string;
  description?: string;
  of?: string;
};

export type ErConstraint = {
  title?: string;
  description?: string;
  columnNames: Array<{
    name: string;
    options?: string[];
  }>;
  method?: string;
  unique?: boolean;
  primary?: boolean;
};

export const DatabaseErContainer = component$<{
  op: OperationWithMethodPath;
}>((props, { render }) => {
  const openapi$ = OpenAPIProvider.use();

  onMounted(() => {
    openapi$.request(props.op.operationId, {});
  });

  return rx(
    openapi$.response$(props.op.operationId),
    render((resp) => {
      return <DatabaseErView database={resp.body} />;
    }),
  );
});

export const DatabaseErView = component$<{
  database: ErDatabase;
}>((props) => {
  return () => {
    return (
      <DatabaseErMain>
        <DatabaseErHeader>{props.database.name}</DatabaseErHeader>
        {Object.entries(props.database.tables).map(([tableName, t]) => {
          return (
            <DatabaseErTableView
              database={props.database}
              table={t}
              tableName={tableName}
            />
          );
        })}
      </DatabaseErMain>
    );
  };
});

const DatabaseErTableView = component$<{
  database: ErDatabase;
  table: ErTable;
  tableName: string;
}>((props, { render }) => {
  const focus$ = new ImmerBehaviorSubject<string[]>([]);

  return rx(
    focus$,
    render((focusColumns) => {
      const columns = props.table.columns;
      const constraints = props.table.constraints;

      return (
        <DatabaseErTable open={true}>
          <DatabaseErTableSummary>
            <span>{props.tableName}</span>
            <Spacer />
            <DatabaseDescription meta={props.table} />
          </DatabaseErTableSummary>
          {Object.keys(columns).map((colName) => {
            const col = columns[colName]!;
            return (
              <DatabaseErTableDef data-hover={focusColumns.includes(colName)}>
                <DatabaseErTableColumnName>{colName}</DatabaseErTableColumnName>
                {col.of ? (
                  <DatabaseErTableColumnOfView
                    database={props.database}
                    of={col.of}
                  />
                ) : (
                  <DatabaseErTableColumnType>
                    {col.type}
                  </DatabaseErTableColumnType>
                )}
                <DatabaseErTableColumnComment>
                  <DatabaseDescription meta={col} />
                </DatabaseErTableColumnComment>
              </DatabaseErTableDef>
            );
          })}

          {Object.entries(constraints).map(([constraintName, constraint]) => {
            return (
              <DatabaseErTableDef
                onMouseover={() => {
                  focus$.next(constraint.columnNames.map((x) => x.name));
                }}
                onMouseleave={() => {
                  focus$.next([]);
                }}
              >
                <DatabaseErTableConstraintName
                  data-primary={constraint.primary}
                  data-unique={constraint.unique}
                >
                  <Icon path={constraint.unique ? mdiKeyOutline : mdiKey} />
                  <span>{constraintName}</span>
                  <span>
                    (
                    {constraint.columnNames
                      .map((x) => [x.name, ...(x.options ?? [])].join(" "))
                      .join(",")}
                    )
                  </span>
                </DatabaseErTableConstraintName>
              </DatabaseErTableDef>
            );
          })}
          <Box sx={{ py: 4 }} />
        </DatabaseErTable>
      );
    }),
  );
});

const DatabaseErTableColumnOfView = component$<{
  of: string;
  database: ErDatabase;
}>((props, { render }) => {
  const open$ = ImmerBehaviorSubject.seed(false);

  const $dialog = rx(
    open$,
    render((open) => {
      const tableName = props.of.split(".")[0]!;

      return (
        <Dialog
          isOpen={open}
          onClose={() => {
            open$.next(false);
          }}
        >
          <DialogContainer>
            <DatabaseErTableView
              database={props.database}
              tableName={tableName}
              table={props.database.tables[tableName]!}
            ></DatabaseErTableView>
          </DialogContainer>
        </Dialog>
      );
    }),
  );

  return () => {
    return (
      <DatabaseErTableColumnOf
        onClick={() => {
          open$.next(true);
        }}
      >
        {props.of}
        {$dialog}
      </DatabaseErTableColumnOf>
    );
  };
});

const DatabaseErMain = styled("div")({
  py: 18,
  px: 24,
  flex: 1,
  overflow: "auto",
});

const DatabaseErHeader = styled("div")({
  py: 8,
  px: 16,
  textStyle: "sys.label-large",
});

const DatabaseErTable = styled("details")({
  "& + &": {
    mt: 16,
  },

  rounded: "sm",
  border: "1px solid",
  borderColor: variant("sys.outline-variant", alpha(0.38)),
  overflow: "hidden",
  width: "100%",
});

const DatabaseErTableSummary = styled("summary")({
  textStyle: "sys.label-large",
  py: 8,
  px: 16,
  display: "flex",
  color: "sys.primary",
});

const DatabaseErTableDef = styled("div")({
  px: 16,
  py: 4,
  display: "flex",

  _hover: {
    containerStyle: "sys.surface-container-low",
  },
});

const DatabaseErTableColumnName = styled("div")({
  display: "flex",
  width: "20vw",
  textStyle: "sys.label-small",
  font: "code",
});

const DatabaseErTableColumnComment = styled("div")({
  display: "flex",
  textStyle: "sys.label-small",
  width: "20vw",
  justifyContent: "end",
});

const DatabaseErTableColumnOf = styled("div")({
  flex: 1,
  textStyle: "sys.label-small",
  font: "code",
  fontWeight: "bold",
  color: "sys.primary",

  _hover: {
    cursor: "pointer",
  },
});

const DatabaseErTableColumnType = styled("div")({
  flex: 1,
  textStyle: "sys.label-small",
});

export const DatabaseDescription = styled<
  {
    meta: { title?: string; description?: string };
  },
  "div"
>("div", (props, {}) => {
  return (Root) => {
    return (
      <Root>
        {props.meta.title}{" "}
        {props.meta.description ? (
          <Tooltip
            $title={
              <MarkdownContainer>
                <Markdown text={props.meta.description} />
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
  display: "flex",
  alignItems: "center",
  gap: 4,
  textStyle: "sys.body-small",
  fontSize: 10,
  lineHeight: 12,

  [`${Icon}`]: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
});

const DialogContainer = styled("div")({
  display: "flex",
  containerStyle: "sys.surface",
  width: "90vw",
  roundedBottom: "sm",
  px: 16,
  py: 36,
  top: 0,
  position: "absolute",
  overflow: "auto",
});

export const DatabaseErTableConstraintName = styled("div")({
  flex: 1,
  textStyle: "sys.label-small",
  font: "code",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "1em",

  _primary: {
    [`${Icon}`]: {
      color: "sys.primary",
    },
  },

  _unique: {
    [`${Icon}`]: {
      position: "relative",
      "&::before": {
        content: JSON.stringify("1"),
        position: "absolute",
        right: -6,
        textStyle: "sys.label-small",
        fontSize: 8,
      },
    },
  },
});

const Spacer = styled("div")({
  flex: 1,
});
