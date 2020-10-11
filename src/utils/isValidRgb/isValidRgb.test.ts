import { isValidRgb } from "./isValidRgb";

describe("isValidRgb", () => {
  it("should return true", () => {
    expect(isValidRgb("222")).toBe(true);
    expect(isValidRgb("111")).toBe(true);
    expect(isValidRgb("0")).toBe(true);
  });

  it("should return false", () => {
    expect(isValidRgb("260")).toBe(false);
    expect(isValidRgb(" ")).toBe(false);
  });
});
