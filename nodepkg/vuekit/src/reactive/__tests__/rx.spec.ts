import {
  map,
  of,
  firstValueFrom
} from "rxjs";
import { it, describe, expect } from "vitest";
import { rx } from "../index";

describe("rx", () => {
  it("with only observable operator", async () => {
    const ret = await firstValueFrom(rx(
      of(2),
      map((v) => v * v)
    ));

    expect(ret).toEqual(4);
  });

  it("with any operator", async () => {
    const ret = await rx(
      of(2),
      map((v) => v * v),
      firstValueFrom
    );

    expect(ret).toEqual(4);
  });
});
