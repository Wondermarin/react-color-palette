import { rgb2hex } from "./rgb2hex";

describe("rgb2hex", () => {
  it("should return #000000", () => {
    expect(rgb2hex(0, 0, 0)).toBe("#000000");
  });

  it("should return #ffffff", () => {
    expect(rgb2hex(255, 255, 255)).toBe("#ffffff");
  });

  it("should return #72aef6", () => {
    expect(rgb2hex(114, 174, 246)).toBe("#72aef6");
  });

  it("should return #7722aa", () => {
    expect(rgb2hex(119, 34, 170)).toBe("#7722aa");
  });
});
