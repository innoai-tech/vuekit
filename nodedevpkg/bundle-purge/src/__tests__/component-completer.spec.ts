import { describe, expect, it } from "vitest";
import { format } from "oxfmt";
import { transform } from "..";

const cases = [
  {
    title: "should complete display name with styled",
    src: `const X = styled("div")({})`,
    dest: `const X = styled("div", { displayName: "X" })({})`,
  },
  {
    title: "should complete props with styled",
    src: `export const X = styled<{ path: string, placement?: "start" | "end", $default?: VNodeChild }, "div">("div", () => (Wrap) => <Wrap />)({})`,
    dest: `export const X = styled<{ path: string, placement?: "start" | "end", $default?: VNodeChild }, "div">("div", () => (Wrap) => <Wrap />, { displayName: "X", props: ["path", "placement"] })({})`,
  },
  {
    title: "should complete display name",
    src: `const X = component(() => null)`,
    dest: `const X = component(() => null, { displayName: "X" })`,
  },
  {
    title: "should complete with props",
    src: `const X = component<{ active?: boolean }>(() => null)`,
    dest: `const X = component<{ active?: boolean }>(() => null, { displayName: "X", props: ["active"] })`,
  },
  {
    title: "should complete with emits",
    src: `const X = component<{ onSelected?: () => void, onDidUpdate?: () => void }>(() => null)`,
    dest: `const X = component<{ onSelected?: () => void, onDidUpdate?: () => void }>(() => null, { displayName: "X", emits: ["selected", "did-update"] })`,
  },
  {
    title: "should complete with component$",
    src: `const X = component$<{ a?: number }>(() => null)`,
    dest: `const X = component$<{ a?: number }>(() => null, { displayName: "X", props: ["a"] })`,
  },
  {
    title: "should complete with parenthesized init",
    src: `const X = (component(() => null))`,
    dest: `const X = (component(() => null, { displayName: "X" }))`,
  },
  {
    title: "should complete with parenthesized callee",
    src: `const X = (component)(() => null)`,
    dest: `const X = (component)(() => null, { displayName: "X" })`,
  },
  {
    title: "should complete with parenthesized styled",
    src: `const X = (styled("div"))({})`,
    dest: `const X = (styled("div", { displayName: "X" }))({})`,
  },
  {
    title: "should complete emits with styled",
    src: `const X = styled<{ onClose?: () => void }>("div")({})`,
    dest: `const X = styled<{ onClose?: () => void }>("div", { displayName: "X", emits: ["close"] })({})`,
  },
  {
    title: "should skip $ props and collect emits",
    src: `const X = component<{ $default?: VNodeChild, onSelect?: () => void, value?: string }>(() => null)`,
    dest: `const X = component<{ $default?: VNodeChild, onSelect?: () => void, value?: string }>(() => null, { displayName: "X", props: ["value"], emits: ["select"] })`,
  },
];

function unPad(str: string) {
  return str.replace(/^\n+|\n+$/, "").replace(/\n+/g, "\n");
}

describe("test cases", () => {
  for (const caseItem of cases) {
    ((caseItem as any).only ? it.only : it)(caseItem.title, async () => {
      const transformedCode = (
        await transform(caseItem.src, { completeComponent: true, annotatePure: false })
      ).code;

      const expectCode = (await format("test.tsx", caseItem.dest, {})).code;
      const actualCode = (await format("test.tsx", transformedCode, {})).code;

      expect(unPad(actualCode || "")).toEqual(unPad(expectCode || ""));
    });
  }
});
