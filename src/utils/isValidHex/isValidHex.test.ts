import { isValidHex } from "./isValidHex";

describe("isValidHex", () => {
  it("should return true", () => {
    expect(isValidHex("#72a")).toBe(true);
    expect(isValidHex("#72aef6")).toBe(true);
    expect(isValidHex("red")).toBe(true);
  });

  it("should return false", () => {
    expect(isValidHex(" ")).toBe(false);
    expect(isValidHex("123")).toBe(false);
  });
});
