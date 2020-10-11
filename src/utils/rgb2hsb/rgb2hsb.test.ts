import { rgb2hsb } from "./rgb2hsb";

describe("rgb2hsb", () => {
  it("should return hsb(0, 0, 0)", () => {
    expect(rgb2hsb(0, 0, 0)).toStrictEqual({ h: 0, s: 0, b: 0 });
  });

  it("should return hsb(0, 0, 100)", () => {
    expect(rgb2hsb(255, 255, 255)).toStrictEqual({ h: 0, s: 0, b: 100 });
  });

  it("should return hsb(212, 53, 96)", () => {
    let { h, s, b } = rgb2hsb(114, 174, 246);

    h = ~~h;
    s = ~~s;
    b = ~~b;

    expect({ h, s, b }).toStrictEqual({ h: 212, s: 53, b: 96 });
  });

  it("should return hsb(277, 80, 66)", () => {
    let { h, s, b } = rgb2hsb(119, 34, 170);

    h = ~~h;
    s = ~~s;
    b = ~~b;

    expect({ h, s, b }).toStrictEqual({ h: 277, s: 80, b: 66 });
  });
});
