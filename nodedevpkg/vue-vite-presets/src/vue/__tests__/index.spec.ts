import { describe, test, expect } from "vitest";
import { extractRouteMeta } from "../index";

/**
 * @property {"名称"} meta.name
 * @property {typeof import("@innoai-tech/vuematerial").mdiPlus} meta.icon
 */
describe("extractRouteMeta", () => {
  test("should extract route meta", () => {
    const meta = extractRouteMeta("", `
/**
 * @property {"名称"} meta.name
 * @property {typeof import("@innoai-tech/vuematerial").mdiPlus} meta.icon
 */
`);

    expect(meta).toEqual({
      meta: {
        name: `"名称"`,
        icon: "mdiPlus"
      },
      __imports: {
        "@innoai-tech/vuematerial": {
          "mdiPlus": true
        }
      }
    });
  });
});