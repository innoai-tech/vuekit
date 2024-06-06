import type { EditorState } from "@innoai-tech/codemirror";
import { syntaxTree } from "@innoai-tech/codemirror";
import type { SyntaxNode } from "@lezer/common";
import { NodeType } from "../parser";
import { visitChildren } from "../astutil/visitor.ts";
import { toKeyPath, toValue } from "../astutil";

export const selectionAt = (state: EditorState, pos: number) => {
  let node = syntaxTree(state).topNode;

  if (pos > 0) {
    if (state.sliceDoc(pos - 1, pos).endsWith("\n")) {
      pos = pos + 1;
    }
  }

  const resolvePath = (
    node: SyntaxNode,
    parent: any[] = []
  ): { node: SyntaxNode; path: any[] } => {
    switch (node.type.id) {
      case NodeType.Document:
        let isObjectValue = false;

        for (const c of visitChildren(node)) {
          if (c.type.is(NodeType.Comment)) {
            continue;
          }

          if (c.type.is(NodeType.Property)) {
            isObjectValue = true;

            if (c.from <= pos && pos <= c.to) {
              const props: SyntaxNode[] = [];
              let value: SyntaxNode | undefined = undefined;

              for (const mayPropName of visitChildren(c)) {
                if (mayPropName.type.is(NodeType.PropertyName)) {
                  props.push(mayPropName);
                  continue;
                }
                value = mayPropName;
              }

              const keyPath = [...parent, ...toKeyPath(state, props)];

              if (value) {
                return resolvePath(value, keyPath);
              }

              return {
                path: keyPath,
                node: c
              };
            }

            continue;
          }

          if (!isObjectValue) {
            return resolvePath(c);
          }
        }

        break;
      case NodeType.Object:
        for (const c of visitChildren(node)) {
          if (c.type.is(NodeType.Comment)) {
            continue;
          }

          if (c.type.is(NodeType.Property)) {
            if (c.from <= pos && pos <= c.to) {
              const props: SyntaxNode[] = [];
              let value: SyntaxNode | undefined = undefined;

              for (const mayPropName of visitChildren(c)) {
                if (mayPropName.type.is(NodeType.PropertyName)) {
                  props.push(mayPropName);
                  continue;
                }
                value = mayPropName;
              }

              const keyPath = [...parent, ...toKeyPath(state, props)];

              if (value) {
                return resolvePath(value, keyPath);
              }

              return {
                path: keyPath,
                node: c
              };
            }
          }
        }
        break;
      case NodeType.Array:
        let idx = 0;
        for (const item of visitChildren(node)) {
          if (!(item.name == "[" || item.name == "]")) {
            if (item.from <= pos && pos <= item.to) {
              return resolvePath(item, [...parent, idx]);
            }
            idx++;
          }
        }
        break;
    }

    return {
      node,
      path: parent
    };
  };

  return {
    ...resolvePath(node),
    root: node,
    values: toValue(state, node, { invalidValueAsUndefined: true })
  };
};
