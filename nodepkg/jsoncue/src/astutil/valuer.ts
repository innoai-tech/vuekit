import { type SyntaxNode } from "@lezer/common";
import { type SourceProvider, SyntaxError } from "./source.ts";
import { NodeType } from "../parser";
import { isObject, isUndefined, isNumber, isArray } from "./typed.ts";
import { visitChildren } from "./visitor.ts";

export interface ValuerOption {
  invalidValueAsUndefined?: boolean;
  onValueNode?: (n: SyntaxNode, keyPath: any[]) => void;
}

export const toValue = (
  source: SourceProvider,
  node: SyntaxNode | null,
  opts: ValuerOption = {},
) => {
  return convertToValue(source, node, [], opts);
};

const convertToValue = (
  source: SourceProvider,
  node: SyntaxNode | null,
  keyPath: any[],
  opts: ValuerOption,
): any => {
  if (!node) {
    return null;
  }

  if (opts.onValueNode) {
    opts.onValueNode(node, keyPath);
  }

  switch (node.type.id) {
    case NodeType.Document:
      let o: Record<string, any> | undefined = undefined;
      for (const c of visitChildren(node)) {
        if (c.type.is(NodeType.Comment)) {
          continue;
        }

        if (c.type.is(NodeType.Property)) {
          if (!o) {
            o = {};
          }
          const [props, value] = getPropsAndValue(source, c);
          const kp = toKeyPath(source, props);
          setObject(
            o,
            kp,
            convertToValue(source, value, [...keyPath, ...kp], opts),
          );
        } else {
          if (o) {
            if (opts.invalidValueAsUndefined) {
              return undefined;
            }
            throw new SyntaxError(
              source,
              c,
              "Property / Value could not in same scope",
            );
          }
          return convertToValue(source, c, keyPath, opts);
        }
      }
      return o;
    case NodeType.Object:
      const obj: Record<string, boolean> = {};

      for (const c of visitChildren(node)) {
        if (c.type.is(NodeType.Comment)) {
          continue;
        }

        if (c.type.is(NodeType.Property)) {
          let [props, value] = getPropsAndValue(source, c);
          const kp = toKeyPath(source, props);
          setObject(
            obj,
            kp,
            convertToValue(source, value, [...keyPath, ...kp], opts),
          );
        }
      }
      return obj;
    case NodeType.Array:
      const arr: any[] = [];
      for (const c of visitChildren(node)) {
        if (c.name == "[" || c.name == "]") {
          continue;
        }
        const v = convertToValue(source, c, [...keyPath, arr.length], opts);
        arr.push(v);
      }
      return arr;
    case NodeType.Bytes:
      if (node.firstChild) {
        throw new SyntaxError(source, node, "invalid bytes");
      }

      const rawBytes = source.sliceDoc(node.from, node.to);
      if (rawBytes.startsWith(`'''`)) {
        return asBytes(
          normalizeIndent(rawBytes.substring(3, rawBytes.length - 3)),
        );
      }
      return asBytes(JSON.parse(rawBytes.replaceAll("'", '"')));
    case NodeType.String:
      if (node.firstChild) {
        if (opts.invalidValueAsUndefined) {
          return undefined;
        }
        throw new SyntaxError(source, node, "invalid string");
      }

      const rawStr = source.sliceDoc(node.from, node.to);
      if (rawStr.startsWith(`"""`)) {
        return normalizeIndent(rawStr.substring(3, rawStr.length - 3));
      }
      return JSON.parse(rawStr);
    case NodeType.Number:
      if (node.firstChild) {
        if (opts.invalidValueAsUndefined) {
          return undefined;
        }
        throw new SyntaxError(source, node, "invalid number");
      }
      return parseFloat(source.sliceDoc(node.from, node.to));
    case NodeType.True:
      return true;
    case NodeType.False:
      return false;
    case NodeType.Null:
      return null;
    default:
      if (opts.invalidValueAsUndefined) {
        return undefined;
      }
      throw new SyntaxError(source, node);
  }
};

export function asBytes(s: string): Uint8Array {
  return new _Bytes(new TextEncoder().encode(s));
}

class _Bytes extends Uint8Array {
  toJSON() {
    return btoa(new TextDecoder().decode(this));
  }
}

export function unquote(s: string) {
  try {
    return JSON.parse(s);
  } catch (_) {
    return s;
  }
}

function normalizeIndent(multiline: string): string {
  const ret = multiline.match(/^(([\n\r]+)[\t ]+)/);
  if (ret) {
    return multiline.replaceAll(ret[1]!, ret[2]!).trimStart();
  }
  return multiline;
}

function getPropsAndValue(
  source: SourceProvider,
  node: SyntaxNode,
): [SyntaxNode[], SyntaxNode] {
  const props: SyntaxNode[] = [];
  let value: SyntaxNode | undefined = undefined;

  for (const c of visitChildren(node)) {
    if (c.type.is(NodeType.PropertyName)) {
      props.push(c);
      continue;
    }

    if (!isUndefined(value)) {
      throw new SyntaxError(source, c, "Property must only one value");
    }

    value = c;
  }

  if (props.length == 0) {
    throw new SyntaxError(
      source,
      node,
      "Property must have at least one PropertyName",
    );
  }

  if (isUndefined(value)) {
    throw new SyntaxError(source, node, "Property must at least one value");
  }

  return [props, value];
}

export function toKeyPath(
  source: SourceProvider,
  props: SyntaxNode[],
): string[] {
  return props.map((prop) => unquote(source.sliceDoc(prop.from, prop.to)));
}

function setObject(o: Record<string, any>, keyPath: string[], v: any) {
  if (keyPath.length === 0) {
    return;
  }

  if (keyPath.length === 1) {
    o[keyPath[0]!] = v;
    return;
  }

  const [key, ...remain] = keyPath;

  if (isUndefined(o[key!])) {
    o[key!] = {};
  } else if (!isObject(o[key!])) {
    throw new Error(`o[${key}] already have non-object value`);
  }

  return setObject(o[key!], remain, v);
}

export function get(v: any, keyPath: any[]) {
  if (keyPath.length == 0) {
    return v;
  }

  if (isArray(v)) {
    const [idx, ...remain] = keyPath;
    if (isNumber(idx)) {
      return get(v[idx], remain);
    }
    return;
  }

  if (isObject(v)) {
    const [prop, ...remain] = keyPath;
    return get((v as any)[prop], remain);
  }

  return;
}
