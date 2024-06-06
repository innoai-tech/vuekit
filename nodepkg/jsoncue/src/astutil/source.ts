import { parser } from "../parser";
import type { Tree, SyntaxNode } from "@lezer/common";
import { EditorState } from "@innoai-tech/codemirror";

export interface SourceProvider {
  sliceDoc(from: number, to?: number): string;
}

export class Source implements SourceProvider {
  static parse = (code: string): Source => {
    return new Source(parser.parse(code), code);
  };

  constructor(
    public tree: Tree,
    private code: string,
  ) {}

  sliceDoc(from: number, to?: number | undefined): string {
    return this.code.slice(from, to);
  }

  get topNode(): SyntaxNode {
    return this.tree.topNode;
  }
}

export class SyntaxError extends Error {
  constructor(
    public source: SourceProvider,
    public node: SyntaxNode,
    public reason = "",
  ) {
    const state = EditorState.create({
      doc: source.sliceDoc(0),
    });

    const line = state.doc.lineAt(node.from);
    const prefix = `${line.number} | `;

    super(`SyntaxError${reason ? `: ${reason}` : ""}
${prefix}${state.sliceDoc(line.from, line.to)}        
${new Array(prefix.length + (node.from - line.from - 1)).fill(" ").join("")} ^ at position ${node.from}        
`);
  }
}
