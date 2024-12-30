import { component, rx, subscribeUntilUnmount, t } from "@innoai-tech/vuekit";
import { Container } from "@webapp/vuekit/layout";
import { JSONEditor, JSONEditorProvider, JSONEditorView } from "../src";
import { tap } from "rxjs";

enum Kind {
  A = "A",
  B = "B",
}

class Port {
  @t.annotate({ title: "名称" })
  @t.string()
  name!: string;

  @t.annotate({ title: "端口号" })
  @t.union(t.integer(), t.string())
  port!: number | string;
}

class JSONSchema {
  @t.annotate({ title: "类型" })
  @t.nativeEnum(Kind)
  kind!: Kind;

  @t.annotate({ title: "名称", description: "详细描述" })
  @t.string()
  name!: string;

  @t.annotate({ title: "注解" })
  @t.record(t.string(), t.string())
  annotations!: Record<string, string>;

  @t.annotate({ title: "秒数" })
  @t.integer()
  @t.optional()
  seconds?: number;

  @t.annotate({ title: "地址" })
  @t.array(t.string())
  @t.optional()
  addresses?: string[];

  @t.annotate({ title: "端口" })
  @t.array(t.object(Port))
  ports!: Port[];

  @t.annotate({ title: "其他配置" })
  @t.record(t.string(), t.any())
  @t.optional()
  manifests!: Record<string, any>;

  @t.annotate({ title: "任意类型" })
  @t.record(t.string(), t.any())
  @t.optional()
  anyjson: any;
}

export default component(() => {
  const x = t.object(JSONSchema);

  const editor$ = JSONEditor.of(x, {
    name: "name",
    annotations: {
      longtext: new Array(100).fill("longtext").join(""),
    },
    ports: [],
    manifests: {
      x: {},
    },
    anyjson: {
      obj: {
        a: 1,
      },
      arr: ["1", "2", "3"],
      nested: [
        {
          a: 1,
        },
        {
          a: 2,
        },
      ],
    },
  });

  rx(
    editor$,
    tap((v) => {
      const [err] = x.validate(v);
      if (!!err) {
        for (const x of err.failures()) {
          editor$.setError(x.path, x.message);
        }
      }
      console.log(JSON.stringify(v, null, 2));
    }),
    subscribeUntilUnmount(),
  );

  return () => (
    <Container sx={{ width: "100%", height: "100%" }}>
      <JSONEditorProvider value={editor$}>
        <JSONEditorView />
      </JSONEditorProvider>
    </Container>
  );
});
