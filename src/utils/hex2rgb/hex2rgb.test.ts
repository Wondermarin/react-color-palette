import { hex2rgb } from "./hex2rgb";

describe("hex2rgb", () => {
  it("should return rgb(0, 0, 0)", () => {
    expect(hex2rgb("#000000")).toStrictEqual({ r: 0, g: 0, b: 0 });
  });

  it("should return rgb(255, 255, 255)", () => {
    expect(hex2rgb("#ffffff")).toStrictEqual({ r: 255, g: 255, b: 255 });
  });

  it("should return rgb(114, 174, 246)", () => {
    expect(hex2rgb("#72aef6")).toStrictEqual({ r: 114, g: 174, b: 246 });
  });

  it("should return rgb(119, 34, 170)", () => {
    expect(hex2rgb("#7722aa")).toStrictEqual({ r: 119, g: 34, b: 170 });
  });
});
