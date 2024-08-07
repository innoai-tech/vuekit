import {
  type AnyType,
  EmptyContext,
  SymbolRecordKey,
  t,
} from "@innoai-tech/typedef";
import { JSONCue } from "../JSONCue.ts";
import { isArray, isNumber, isObject, isUndefined } from "../astutil/typed.ts";
import {
  type EditorState,
  type Completion,
  type CompletionContext,
  type CompletionResult,
  snippetCompletion,
} from "@innoai-tech/codemirror";
import { selectionAt } from "./util.ts";
import type { SyntaxNode } from "@lezer/common";
import { NodeType } from "../astutil/index.ts";

export function schemaAt(
  typ: AnyType,
  values: any,
  path: any[],
  ctx = EmptyContext,
) {
  switch (typ.type) {
    case "array":
      if (path.length === 0) {
        return typ;
      }

      const index = path[0];

      if (isUndefined(values)) {
        values = [];
      }

      if (!isNumber(index) || !isArray(values)) {
        return;
      }

      for (const [idx, _, propType] of typ.entries(new Array(index + 1), ctx)) {
        if (idx == index) {
          const childValue = values[index];

          return schemaAt(propType, childValue, path.slice(1), {
            path: [...ctx.path, index],
            branch: [...ctx.branch, childValue],
          });
        }
      }

      break;
    case "record":
      if (path.length === 0) {
        return typ;
      }

      if (isUndefined(values)) {
        values = {};
      }

      if (!isObject(values)) {
        return;
      }

      if (Object.keys(values).length == 0 && path.length > 0) {
        (values as any)[path[0]] = undefined;
      }

      for (const [key, _, propType] of typ.entries(values, ctx)) {
        if (key == SymbolRecordKey) {
          continue;
        }

        const childValue = (values as any)[key];

        return schemaAt(propType, childValue, path.slice(1), {
          path: [...ctx.path, String(key)],
          branch: [...ctx.branch, childValue],
        });
      }

      return typ;
    case "union":
    case "object":
      if (isUndefined(values)) {
        values = {};
      }

      if (!isObject(values)) {
        return;
      }

      const props: Record<string, AnyType> = {};

      for (const [key, _, propType] of typ.entries(values, ctx)) {
        const propName = String(key);

        if (propName == path[0]) {
          const childValue = (values as any)[propName];

          return schemaAt(propType, childValue, path.slice(1), {
            path: [...ctx.path, propName],
            branch: [...ctx.branch, childValue],
          });
        }

        props[propName] = propType;
      }

      return t.object(props);
  }

  return typ;
}

function asSnippetHolder(typ: AnyType): string {
  switch (typ.type) {
    case "object":
    case "record":
      return "{${}}";
    case "array":
      return "[${}]";
    case "string":
      return `"\${}"`;
    case "binary":
      return `'\${}'`;
  }
  return "${}";
}

function asDefaultValue(typ: AnyType): string {
  switch (typ.type) {
    case "object":
    case "record":
      return "{}";
    case "array":
      return "[]";
    case "binary":
      return `''`;
    case "string":
      return `""`;
  }
  return "";
}

function asCompletions(typ: AnyType, node: SyntaxNode): Completion[] {
  const completions: Completion[] = [];

  switch (typ.type) {
    case "array":
      if (node.type.is(NodeType.Array)) {
        const itemsType = typ.getSchema<AnyType>("items")!;
        completions.push(
          snippetCompletion(asSnippetHolder(itemsType), {
            label: asDefaultValue(itemsType),
          }),
        );
        break;
      }

      completions.push(
        snippetCompletion(asSnippetHolder(typ), {
          label: asDefaultValue(typ),
        }),
      );

      break;
    case "record":
      break;
    case "union":
    case "object":
      for (const [key, _, propType] of typ.entries({}, EmptyContext)) {
        const propName = String(key);

        const base = {
          label: propName,
          info: propType.getMeta<string>("description")?.split("\n")?.[0] ?? "",
        };

        completions.push(
          snippetCompletion(
            `${JSONCue.stringifyPropertyName(propName)}: ${asSnippetHolder(propType)}`,
            base,
          ),
        );
      }
      break;
    case "boolean":
      completions.push(
        {
          label: "true",
          apply: "true",
        },
        {
          label: "false",
          apply: "false",
        },
      );
      break;
    case "enums":
      for (const v of typ.getSchema<any[]>("enum") ?? []) {
        completions.push({
          label: `${v}`,
          apply: JSON.stringify(v),
        });
      }
      break;
  }

  return completions;
}

export function jsoncueCompletions(tpe: AnyType) {
  const completionsAt = (state: EditorState, pos: number) => {
    const selectionSet = selectionAt(state, pos);

    const resolved = schemaAt(tpe, selectionSet.values, selectionSet.path);
    if (!resolved) {
      return [];
    }

    return asCompletions(resolved, selectionSet.node);
  };

  return (ctx: CompletionContext): CompletionResult | null => {
    let before = ctx.matchBefore(/\w+/);

    if (!ctx.explicit && !before) {
      return null;
    }

    return {
      from: before?.text ? before?.from : ctx.pos,
      options: completionsAt(ctx.state, ctx.pos),
      filter: true,
    };
  };
}
