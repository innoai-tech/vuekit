import { describe, expect, it } from "bun:test";
import { JSONCue } from "../JSONCue.ts";

describe("JSONCue", () => {
  const simple = Bun.file(
    Bun.fileURLToPath(import.meta.resolve("./fixtures/simple.json.cue")),
  );

  it("should parse", async () => {
    const v = JSONCue.parse(await simple.text());

    expect(v).toEqual({
      str: "str value",
      mlStr: "1\n\t22\n\t\t333\n",
      bytes: JSONCue.asBytes("{}"),
      mlBytes: JSONCue.asBytes(`a:\n  b: 1\n`),
      int: 1,
      float: 1.1,
      array: [true, false, null],
      nested: {
        a: {
          b: { c: 2, d: 3 },
        },
      },
    });

    expect(JSONCue.stringify(JSON.parse(JSON.stringify(v)))).toMatchSnapshot();
  });
});
