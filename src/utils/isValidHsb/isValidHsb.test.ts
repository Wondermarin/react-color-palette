import { isValidHsb } from "./isValidHsb";

describe("isValidHsb", () => {
  it("should return true", () => {
    expect(isValidHsb(true, "180")).toBe(true);
    expect(isValidHsb(false, "99")).toBe(true);
    expect(isValidHsb(false, "44")).toBe(true);
  });

  it("should return false", () => {
    expect(isValidHsb(true, "400")).toBe(false);
    expect(isValidHsb(false, "360")).toBe(false);
    expect(isValidHsb(false, " ")).toBe(false);
  });
});
