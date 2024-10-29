import { describe, expect, test } from "bun:test";
import { JSONPointer } from "../JSONPointer.ts";
import { Schema } from "../Schema.ts";

const rfcExample = {
  foo: ["bar", "baz"],
  bar: { baz: 10 },
  "": 0,
  "a/b": 1,
  "c%d": 2,
  "e^f": 3,
  "g|h": 4,
  "i\\j": 5,
  'k"l': 6,
  " ": 7,
  "m~n": 8,
};

describe("JSONPointer", () => {
  const rfcParsed = {
    "": { tokens: [], value: rfcExample },
    "/foo": { tokens: ["foo"], value: rfcExample.foo },
    "/foo/0": { tokens: ["foo", "0"], value: "bar" },
    "/bar": { tokens: ["bar"], value: rfcExample.bar },
    "/bar/baz": { tokens: ["bar", "baz"], value: 10 },
    "/": { tokens: [""], value: 0 },
    "/a~1b": { tokens: ["a/b"], value: 1 },
    "/c%d": { tokens: ["c%d"], value: 2 },
    "/e^f": { tokens: ["e^f"], value: 3 },
    "/g|h": { tokens: ["g|h"], value: 4 },
    "/i\\j": { tokens: ["i\\j"], value: 5 },
    '/k"l': { tokens: ['k"l'], value: 6 },
    "/ ": { tokens: [" "], value: 7 },
    "/m~0n": { tokens: ["m~n"], value: 8 },

    // custom
    "/foo/": { tokens: ["foo", Schema.RecordKey], value: "foo" },
  };

  for (const [pointer, x] of Object.entries(rfcParsed)) {
    test(pointer, () => {
      const p = JSONPointer.create(x.tokens);
      expect(p).toEqual(pointer);

      const value = JSONPointer.get(rfcExample, pointer);
      expect(value).toEqual(x.value);
    });
  }
});
