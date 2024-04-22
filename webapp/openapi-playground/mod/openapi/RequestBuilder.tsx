import {
  component,
  component$, observableRef,
  render,
  rx, subscribeOnMountedUntilUnmount,
  subscribeUntilUnmount,
  t,
  Type,
  TypeWrapper, useRoute,
  useRouter
} from "@innoai-tech/vuekit";
import type { JSONSchema, Operation } from "./models";
import { FormData, f, type Field } from "@innoai-tech/vueformdata";
import { TextField } from "./components/TextField";
import { isUndefined } from "./util/typed.ts";
import { type VNodeChild } from "@innoai-tech/vuekit";
import { combineLatest, tap } from "rxjs";
import { FilledButton, Icon } from "@innoai-tech/vuematerial";
import { Box } from "@innoai-tech/vueuikit";
import { Description, Line, SchemaView } from "./SchemaView.tsx";
import { OpenAPIProvider } from "./OpenAPIProvider.tsx";
import { JSONCueEditorInput } from "./components/JSONCueEditor.tsx";
import { onUnmounted } from "vue";
import { ResponsePreview } from "./ResponsePreview.tsx";
import { HttpRequest } from "./HTTPViews.tsx";
import { mdiUploadBox } from "@mdi/js";

export function rawSchema(rawSchema: JSONSchema) {
  return <T, S>(t: Type<T, S>) => {
    return TypeWrapper.of(t, {
      $meta: {
        rawSchema: rawSchema
      }
    });
  };
}

export const RequestBuilder = component$({
  operation: t.custom<Operation>(),
  $default: t.custom<VNodeChild>()
}, (props, { slots }) => {
  const openapi$ = OpenAPIProvider.use();

  const propSchemas: Record<string, any> = {};

  for (const p of props.operation.parameters ?? []) {
    const x = t.custom().use(
      f.label(`${p.name}, in=${JSON.stringify(p.in)}`),
      rawSchema(p.schema)
    );

    if (["object", "array"].includes(p.schema.type ?? "")) {
      propSchemas[p.name] = x.use(f.inputBy(JSONCueEditorInput));
    } else {
      propSchemas[p.name] = x;
    }
  }

  if (props.operation.requestBody) {
    const first = Object.entries(props.operation.requestBody.content ?? {})[0];

    if (first) {
      const [contentType, content] = first;

      const x = t.custom().use(
        f.label(`body, content-type = ${JSON.stringify(contentType)}`),
        rawSchema(content.schema)
      );

      if (contentType.includes("json")) {
        propSchemas["body"] = x.use(f.inputBy(JSONCueEditorInput));
      } else if (contentType.includes("octet-stream")) {
        propSchemas["body"] = x.use(f.inputBy(FileSelectInput));
      } else {
        propSchemas["body"] = x;
      }
    }
  }

  const router = useRouter();
  const route = useRoute();

  const tryParseParams = () => {
    try {
      const params = route.query["params"];
      return JSON.parse(atob((Array.isArray(params) ? params[0] : params) ?? ""));
    } catch (err) {

    }
    return {};
  };


  const form$ = FormData.of(t.object(propSchemas), tryParseParams());

  rx(
    form$,
    tap((values) => {
      openapi$.request(props.operation.operationId, values);
    }),
    tap((values) => {
      void router.replace({
        query: {
          "params": btoa(JSON.stringify(values))
        }
      });
    }),
    subscribeUntilUnmount()
  );


  const $requestPreview = rx(
    form$.inputs$,
    render((inputs) => {
      const createConfig = openapi$.asRequestConfigCreator(props.operation.operationId);
      if (!createConfig) {
        return null;
      }
      return <HttpRequest request={createConfig(inputs)} />;
    })
  );

  return () => {
    return (
      <Box
        key={props.operation.operationId}
        sx={{
          py: 24,
          px: 24,
          gap: 24,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          overflow: "hidden"
        }}
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          form$.submit();
        }}
      >
        <Box sx={{
          flex: 2,
          py: 24,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          height: "100%",
          overflow: "auto"
        }}>

          {[...form$.fields(form$.typedef)].map((f) => {
            return (
              <ParameterInput field$={f} />
            );
          })}
        </Box>
        <Box sx={{
          flex: 3,
          gap: 24,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden"
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            height: "100%",
            overflow: "hidden"
          }}>
            {$requestPreview}
            <Box sx={{ px: 8 }}>
              <FilledButton type={"submit"}>
                发起请求
              </FilledButton>
            </Box>
            <ResponsePreview operationID={props.operation.operationId} />
            <Box sx={{ flex: 1, overflow: "auto" }}>
              {slots.default?.()}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
});

const ParameterInput = component$(
  {
    field$: t.custom<Field>()
  },
  ({ field$ }, { render }) => {
    onUnmounted(() => {
      field$.destroy();
    });

    return rx(
      combineLatest([field$, field$.input$]),
      render(([s, value]) => {
        let rawSchema = field$.meta?.["rawSchema"] as JSONSchema ?? {};

        let Input: any = field$.meta?.input ?? TextInput;

        const readOnly = (field$.meta?.readOnlyWhenInitialExist ?? false) && !!s.initial;

        return (
          <TextField
            valued={!isUndefined(value ?? s.initial)}
            invalid={!!s.error}
            focus={!!s.focus}
            $label={
              <span>
                {labelOrName(field$)}
                {field$.optional ? "（非必填）" : ""}
              </span>
            }
            $supporting={
              <Line>
                <Description schema={rawSchema ?? {}} />
                <SchemaView schema={rawSchema ?? {}} />
              </Line>
            }
            $trailing={(Input as any).$trailing}
          >
            <Input field$={field$} readOnly={readOnly} />
          </TextField>
        );
      })
    );
  }
);

function labelOrName(field$: Field): string {
  return field$.meta.label ?? field$.name;
}

export const TextInput = component(
  {
    readOnly: t.boolean().optional(),
    field$: t.custom<Field<string>>()
  },
  (props) => {
    return () => {
      const { readOnly, field$, ...others } = props;

      return (
        <input
          {...others}
          data-input
          type={"text"}
          readonly={readOnly}
          name={field$.name}
          value={field$.input}
          onChange={(e) => {
            field$.update((e.target as HTMLInputElement).value);
          }}
          onFocus={() => field$.focus()}
          onBlur={() => field$.blur()}
        />
      );
    };
  }
);


export const FileSelectInput = component$(
  {
    field$: t.custom<Field<File>>(),
    readOnly: t.boolean().optional(),
    accept: t.string().optional()
  },
  (props) => {
    const file$ = observableRef<File | null>(null);

    rx(
      file$,
      tap((file) => {
        if (file) {
          props.field$.update(file);
        }
      }),
      subscribeOnMountedUntilUnmount()
    );

    return () => {
      const { readOnly, accept } = props;

      return (
        <Box
          component={"label"}
          data-input
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap: 8,

            $data_file_input: {
              display: "none"
            },

            $data_icon: {
              width: 40,
              height: 40,
              my: 40
            }
          }}
        >
          <input
            type={"file"}
            name={props.field$.name}
            readonly={readOnly}
            accept={accept}
            data-file-input
            onChange={(e) => {
              const file = (e.target as HTMLInputElement).files?.[0];

              if (file) {
                file$.value = file;
              }
            }}
          />
          <Icon path={mdiUploadBox} />
          <span>{file$.value?.name}</span>
        </Box>
      );
    };
  }
);
