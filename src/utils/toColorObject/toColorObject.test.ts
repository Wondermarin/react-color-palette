import { toColorObject } from "./toColorObject";
import { ColorObject } from "./toColorObject.types";

describe("toColorObject", () => {
  it("should return `ColorObject` of blue color", () => {
    const color: ColorObject = {
      hex: "#0000ff",
      rgb: {
        r: 0,
        g: 0,
        b: 255,
      },
      hsb: {
        h: 240,
        s: 100,
        b: 100,
      },
    };

    expect(toColorObject("hex", "#0000ff")).toStrictEqual(color);
    expect(toColorObject("rgb", { r: 0, g: 0, b: 255 })).toStrictEqual(color);
    expect(toColorObject("hsb", { h: 240, s: 100, b: 100 })).toStrictEqual(color);
  });
});
