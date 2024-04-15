import type { SyntaxNode } from "@lezer/common";
import { Printer } from "./printer.ts";
import type { Source } from "./source.ts";

export function stringifyAst(source: Source) {
  const p = new Printer();

  const walk = (p: Printer, node: SyntaxNode) => {
    p.write(node.name);
    p.write(`[${node.type.id}]`);

    const children = [...visitChildren(node)];

    if (children.length == 0) {
      p.write("{");
      p.write(source.sliceDoc(node.from, node.to).toString());
      p.write("}");
      return;
    }

    p.write("(");
    p.break();

    p.withIdent(() => {
      for (const c of children) {
        p.tab();
        walk(p, c);
        p.write(",");
        p.break();
      }
    });

    p.tab();
    p.write(")");
  };

  walk(p, source.topNode);

  return p.toString();
}

export function* visitChildren(node: SyntaxNode): Iterable<SyntaxNode> {
  for (
    let c: SyntaxNode | null = node.firstChild;
    c != null;
    c = c.nextSibling
  ) {
    yield c;
  }
}

export function* visitAll(node: SyntaxNode): Iterable<SyntaxNode> {
  yield node;

  for (
    let c: SyntaxNode | null = node.firstChild;
    c != null;
    c = c.nextSibling
  ) {
    yield* visitChildren(c);
  }
}
