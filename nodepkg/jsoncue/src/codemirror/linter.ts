import type { EditorView } from "@codemirror/view";
import type { Diagnostic } from "@codemirror/lint";
import { visitAll } from "../astutil/visitor.ts";
import { syntaxTree } from "@innoai-tech/codemirror";
import type { AnyType } from "@innoai-tech/typedef";
import { toValue } from "../astutil";
import type { SyntaxNode } from "@lezer/common";
import { JSONPointer } from "../JSONPointer.ts";

export function jsoncueParseLinter(v: EditorView): Diagnostic[] {
  return [...visitAll(syntaxTree(v.state).topNode)]
    .filter((n) => n.type.isError)
    .map((n) => ({
      severity: "error",
      from: n.from,
      to: n.to,
      // FIXME clear error msg
      message: "语法错误",
    }));
}

export function jsoncueValidateLinter(tpe: AnyType) {
  return (v: EditorView): Diagnostic[] => {
    const node = syntaxTree(v.state).topNode;

    if (
      [...visitAll(syntaxTree(v.state).topNode)].some((n) => n.type.isError)
    ) {
      return [];
    }

    const nodes: Record<string, SyntaxNode[]> = {};

    const values = toValue(v.state, node, {
      onValueNode: (node: SyntaxNode, keyPath: any[]) => {
        const k = JSONPointer.compile(keyPath);
        nodes[k] = [...(nodes[k] ?? []), node];
      },
    });

    const [err] = tpe.validate(values);

    if (!err) {
      return [];
    }

    const ret: Diagnostic[] = [];

    for (const f of err.failures()) {
      if (f.type === "never") {
        continue;
      }

      for (const n of nodes[JSONPointer.compile(f.path)] ?? []) {
        ret.push({
          severity: "error",
          from: n.from,
          to: n.to,
          message: f.message,
        });
      }
    }

    return ret;
  };
}
