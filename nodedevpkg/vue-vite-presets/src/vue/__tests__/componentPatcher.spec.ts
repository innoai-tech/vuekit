import { describe, test, expect } from "bun:test";
import { exportScanner } from "../index";

describe("exportScanner", () => {
  test("scan", () => {
    const ret = exportScanner("./File.tsx").scan(
      `
export const X = styled("div")({})    
export default styled("div")({})    
`,
    );

    expect(ret).toEqual({
      code: `
const __X = styled("div")({})    
const FileDefault = styled("div")({})    
`,
      exports: new Map([
        ["__X", { exported: "X", id: "d0e67569" }],
        ["FileDefault", { exported: "default", id: "57d8e51a" }],
      ]),
    });
  });
});
