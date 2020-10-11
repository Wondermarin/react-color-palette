import { changeHue } from "./changeHue";
import { ColorObject } from "../toColorObject";

describe("changeHue", () => {
  it("should change red to green", () => {
    const color: ColorObject = {
      hex: "#ff0000",
      rgb: {
        r: 255,
        g: 0,
        b: 0,
      },
      hsb: {
        h: 0,
        s: 100,
        b: 100,
      },
    };

    const newColor: ColorObject = {
      hex: "#00ff00",
      rgb: {
        r: 0,
        g: 255,
        b: 0,
      },
      hsb: {
        h: 120,
        s: 100,
        b: 100,
      },
    };

    expect(changeHue(color, 120)).toStrictEqual(newColor);
  });

  it("should change green to blue", () => {
    const color: ColorObject = {
      hex: "#00ff00",
      rgb: {
        r: 0,
        g: 255,
        b: 0,
      },
      hsb: {
        h: 120,
        s: 100,
        b: 100,
      },
    };

    const newColor: ColorObject = {
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

    expect(changeHue(color, 240)).toStrictEqual(newColor);
  });
});
