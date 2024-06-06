import type { EditorView, Diagnostic } from "@innoai-tech/codemirror";
import { visitAll } from "../astutil/visitor.ts";
import { syntaxTree } from "@innoai-tech/codemirror";
import type { AnyType } from "@innoai-tech/typedef";
import { NodeType, toValue } from "../astutil";
import type { SyntaxNode } from "@lezer/common";
import { JSONPointer } from "../JSONPointer.ts";
import { last, isUndefined } from "@innoai-tech/lodash";

export function jsoncueParserLinter(v: EditorView): Diagnostic[] {
  return convertToDiagnostics([...visitAll(syntaxTree(v.state).topNode)]
    .filter((n) => n.type.isError));
}

function convertToDiagnostics(nodes: SyntaxNode[]): Diagnostic[] {
  return nodes.map((n) => ({
    severity: "error",
    from: n.from,
    to: n.to,
    message: errorMsg(n)
  }));
}

function errorMsg(node: SyntaxNode) {
  if (node.parent) {
    if (node.parent.type.is(NodeType.PropertyName)) {
      return "Invalid PropertyName`";
    }
    if (node.parent.type.is(NodeType.Object)) {
      return "Object should have valid Property: `PropertyName: value`";
    }
    if (node.parent.type.is(NodeType.Document)) {
      if (node.prevSibling && node.prevSibling.type.is(NodeType.Property)) {
        return "Document is already an Object with Properties, value is not allow to add`";
      }
      if (node.prevSibling && !node.prevSibling.type.is(NodeType.Property)) {
        return "Document is already a value, Property not allow to add`";
      }
    }
    if (node.parent.type.is(NodeType.Array)) {
      if (node.prevSibling && node.prevSibling.name != ",") {
        return "Array items need split by `,`";
      }
    }
  }
  return "Syntax Error";
}


export function jsoncueParserOrValidateLinter(tpe: AnyType) {
  return (v: EditorView): Diagnostic[] => {
    const node = syntaxTree(v.state).topNode;

    const parseErrors = [...visitAll(syntaxTree(v.state).topNode)].filter((n) => n.type.isError);

    if (parseErrors.length > 0) {
      return convertToDiagnostics(parseErrors);
    }

    const nodes: Record<string, SyntaxNode[]> = {};

    const values = toValue(v.state, node, {
      onValueNode: (node: SyntaxNode, keyPath: any[]) => {
        const k = JSONPointer.compile(keyPath);
        nodes[k] = [...(nodes[k] ?? []), node];
      },
      invalidValueAsUndefined: true
    });

    const [err] = tpe.validate(values);

    if (!err) {
      return [];
    }

    const failures = err.failures();

    const ret: Diagnostic[] = [];

    for (const f of failures) {
      if (f.type === "never") {
        continue;
      }

      const path = JSONPointer.compile(f.path);

      for (const x in nodes) {
        const list = nodes[x]!;

        if (path == x) {
          for (const n of list) {
            ret.push({
              from: n.from,
              to: n.to,
              severity: "error",
              message: f.message
            });
          }
        }

        if (x != "/" && path.startsWith(`${x}/`)) {
          if (isUndefined(f.value) && !path.slice(`${x}/`.length).includes("/")) {
            for (const n of list) {
              ret.push({
                from: n.from,
                to: n.to,
                severity: "error",
                message: `missing required field "${last(f.path)}"`
              });
            }
          }
        }
      }
    }

    return ret;
  };
}
