import { parse } from "oxc-parser";

export interface TransformOptions {
  filename?: string;
  /** 是否添加 #__PURE__ 注释并删除 side imports（默认 true） */
  annotatePure?: boolean;
  /** 是否补全组件 displayName/props/emits（默认 false） */
  completeComponent?: boolean;
}

export interface TransformResult {
  code: string;
}

const PURE_COMMENT = "/*#__PURE__*/";

interface Edit {
  start: number;
  end?: number;
  content: string;
}

interface Node {
  type: string;
  start: number;
  end: number;
  [key: string]: any;
}

const isCallExpr = (n: any): n is Node =>
  !!n && (n.type === "CallExpression" || n.type === "ImportExpression");

const unwrapParens = (e: any): any =>
  e && e.type === "ParenthesizedExpression" ? e.expression : e;

/** 检查 init 表达式中是否引用了指定变量名 */
function referencesName(node: any, name: string): boolean {
  let found = false;
  const scan = (n: any) => {
    if (!n || typeof n !== "object" || found) return;
    if (Array.isArray(n)) {
      for (const x of n) scan(x);
      return;
    }
    if (n.type === "Identifier" && n.name === name) {
      found = true;
      return;
    }
    for (const [k, v] of Object.entries(n)) {
      if (k !== "parent" && v && typeof v === "object") scan(v);
    }
  };
  scan(node);
  return found;
}

/** 收集需要加 #__PURE__ 注释的 CallExpression 位置 */
function collectPureTargets(program: any): number[] {
  const targets: number[] = [];

  const walk = (n: any) => {
    if (!n || typeof n !== "object") return;
    if (Array.isArray(n)) {
      for (const x of n) walk(x);
      return;
    }
    if (!n.type) return;

    switch (n.type) {
      // x = pureCall() / a.x = pureCall()
      case "AssignmentExpression": {
        const right = unwrapParens(n.right);
        if (isCallExpr(right)) targets.push(right.start);
        break;
      }
      // { x: pureCall() }
      case "Property": {
        const value = unwrapParens(n.value);
        if (isCallExpr(value)) targets.push(value.start);
        break;
      }
      // [pureCall()]
      case "ArrayExpression": {
        for (const el of n.elements) {
          if (el) {
            const e = unwrapParens(el);
            if (isCallExpr(e)) targets.push(e.start);
          }
        }
        break;
      }
      // const x = pureCall()
      case "VariableDeclarator": {
        const id = n.id;
        const init = n.init;
        if (id && id.type === "Identifier" && init) {
          const used = referencesName(init, id.name);
          if (!used) {
            const e = unwrapParens(init);
            if (isCallExpr(e)) {
              // 参数全部为 CallExpression 时，外层调用本身不加注释（仅内层参数加）
              const args = e["arguments"] ?? [];
              const allCallArgs =
                args.length > 0 &&
                args.every(
                  (a: any) => a && a.type !== "SpreadElement" && isCallExpr(unwrapParens(a)),
                );
              if (!allCallArgs) targets.push(e.start);
            }
          }
        }
        break;
      }
      // pureCall() 作为参数
      case "CallExpression": {
        for (const arg of n.arguments) {
          if (arg && arg.type !== "SpreadElement") {
            const e = unwrapParens(arg);
            if (isCallExpr(e)) targets.push(e.start);
          }
        }
        break;
      }
    }

    for (const [k, v] of Object.entries(n)) {
      if (k !== "parent" && v && typeof v === "object") walk(v);
    }
  };

  walk(program);
  return targets;
}

/** 收集需要删除的 side imports（无 specifiers 的 import） */
function collectSideImports(program: any): Array<[number, number]> {
  const ranges: Array<[number, number]> = [];
  for (const stmt of program.body) {
    if (stmt.type === "ImportDeclaration" && (!stmt.specifiers || stmt.specifiers.length === 0)) {
      ranges.push([stmt.start, stmt.end]);
    }
  }
  return ranges;
}

/** 检查位置前是否已有 #__PURE__ 注释 */
function hasPureComment(comments: any[], pos: number): boolean {
  return comments.some(
    (c) => c.type === "Block" && c.value.includes("#__PURE__") && c.end <= pos && pos - c.end <= 2,
  );
}

const toKebabCase = (s: string): string => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

/** 找到可补全的调用：styled(...)(...) 的最内层 styled 调用，或 component/component$ 调用 */
function findCompletableCall(expr: any): any | null {
  let e = expr;
  while (e && e.type === "CallExpression") {
    const callee = unwrapParens(e.callee);
    if (callee && callee.type === "Identifier") {
      if (callee.name === "styled" || callee.name === "component" || callee.name === "component$") {
        return e;
      }
      return null;
    }
    if (callee && callee.type === "CallExpression") {
      e = callee;
      continue;
    }
    return null;
  }
  return null;
}

/** 构建组件选项对象字符串 */
function buildComponentOptions(call: any, displayName: string): string | null {
  const props: string[] = [];
  const emits: string[] = [];

  const typeArgs = call.typeArguments;
  if (typeArgs && typeArgs.params) {
    for (const param of typeArgs.params) {
      if (param.type === "TSTypeLiteral" && param.members) {
        for (const member of param.members) {
          if (
            member.type === "TSPropertySignature" &&
            member.key &&
            member.key.type === "Identifier"
          ) {
            const name = member.key.name;
            if (
              name.startsWith("on") &&
              name.length > 2 &&
              name[2] === name[2].toUpperCase() &&
              name[2] !== name[2].toLowerCase()
            ) {
              emits.push(toKebabCase(name.slice(2)));
            } else if (!name.startsWith("$")) {
              props.push(name);
            }
          }
        }
      }
    }
  }

  const parts: string[] = [`displayName: ${JSON.stringify(displayName)}`];
  if (props.length > 0) {
    parts.push(`props: [${props.map((p) => JSON.stringify(p)).join(", ")}]`);
  }
  if (emits.length > 0) {
    parts.push(`emits: [${emits.map((e) => JSON.stringify(e)).join(", ")}]`);
  }

  return `{ ${parts.join(", ")} }`;
}

/** 收集组件补全编辑：为 styled/component/component$ 调用追加 { displayName, props, emits } */
function collectComponentCompleterEdits(program: any): Edit[] {
  const edits: Edit[] = [];

  const walk = (n: any) => {
    if (!n || typeof n !== "object") return;
    if (Array.isArray(n)) {
      for (const x of n) walk(x);
      return;
    }
    if (!n.type) return;

    if (n.type === "VariableDeclarator") {
      const id = n.id;
      const init = n.init;
      if (id && id.type === "Identifier" && init) {
        const displayName = id.name;
        const call = findCompletableCall(unwrapParens(init));
        if (call) {
          const options = buildComponentOptions(call, displayName);
          if (options) {
            // 在最后一个参数后插入
            const args = call["arguments"];
            const lastArg = args[args.length - 1];
            edits.push({ start: lastArg.end, content: `, ${options}` });
          }
        }
      }
    }

    for (const [k, v] of Object.entries(n)) {
      if (k !== "parent" && v && typeof v === "object") walk(v);
    }
  };

  walk(program);
  return edits;
}

export async function transform(
  code: string,
  opts: TransformOptions = {},
): Promise<TransformResult> {
  const filename = opts.filename ?? "unknown.tsx";
  const result = await parse(filename, code, {});
  const program = result.program;

  const edits: Edit[] = [];

  if (opts.annotatePure !== false) {
    // 加 #__PURE__ 注释
    for (const pos of collectPureTargets(program)) {
      if (!hasPureComment(result.comments, pos)) {
        edits.push({ start: pos, content: PURE_COMMENT });
      }
    }

    // 删除 side imports
    for (const [start, end] of collectSideImports(program)) {
      edits.push({ start, end, content: "" });
    }
  }

  if (opts.completeComponent) {
    // 组件补全
    edits.push(...collectComponentCompleterEdits(program));
  }

  // 从后往前应用编辑，避免位置偏移
  edits.sort((a, b) => b.start - a.start);
  let out = code;
  for (const edit of edits) {
    if (edit.end !== undefined) {
      out = out.slice(0, edit.start) + edit.content + out.slice(edit.end);
    } else {
      out = out.slice(0, edit.start) + edit.content + out.slice(edit.start);
    }
  }

  return { code: out };
}
