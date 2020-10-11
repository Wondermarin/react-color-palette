import { getCoordinatesByColor } from "./getCoordinatesByColor";
import { ColorObject } from "../toColorObject";

describe("getCoordinatesByColor", () => {
  it("should return the coordinates of the green color", () => {
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

    const [x, y] = getCoordinatesByColor(color, 100, 100);

    expect(x).toBe(100);
    expect(y).toBe(0);
  });
});
