import { describe, expect, it } from "bun:test";
import { isValidIdentity } from "../astutil";

describe("#isValidIdentity", () => {
  it("identity should true", () => {
    for (const id of ["job", "job1"]) {
      expect(isValidIdentity(id)).toBeTrue();
    }
  });

  it("invalid identity should false", () => {
    for (const id of ["job-1", "1"]) {
      expect(isValidIdentity(id)).toBeFalsy();
    }
  });
});
