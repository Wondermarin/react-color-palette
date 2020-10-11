import { hsb2rgb } from "./hsb2rgb";

describe("hsb2rgb", () => {
  it("should return rgb(0, 0, 0)", () => {
    expect(hsb2rgb(0, 0, 0)).toStrictEqual({ r: 0, g: 0, b: 0 });
  });

  it("should return rgb(255, 255, 255)", () => {
    expect(hsb2rgb(0, 0, 100)).toStrictEqual({ r: 255, g: 255, b: 255 });
  });

  it("should return rgb(113, 172, 245)", () => {
    let { r, g, b } = hsb2rgb(213, 54, 96);

    r = ~~r;
    g = ~~g;
    b = ~~b;

    expect({ r, g, b }).toStrictEqual({ r: 113, g: 172, b: 245 });
  });

  it("should return rgb(121, 34, 171)", () => {
    let { r, g, b } = hsb2rgb(278, 80, 67);

    r = ~~r;
    g = ~~g;
    b = ~~b;

    expect({ r, g, b }).toStrictEqual({ r: 121, g: 34, b: 171 });
  });
});
