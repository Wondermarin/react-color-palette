import { getColorByCoordinates } from "./getColorByCoordinates";
import { ColorObject } from "../toColorObject";

describe("getColorByCoordinates", () => {
  it("should return green", () => {
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

    expect(getColorByCoordinates(120, 100, 0, 100, 100)).toStrictEqual(color);
  });

  it("should return red", () => {
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

    expect(getColorByCoordinates(0, 100, 0, 100, 100)).toStrictEqual(color);
  });
});
