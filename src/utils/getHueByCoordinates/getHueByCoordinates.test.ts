import { getHueByCoordinates } from "./getHueByCoordinates";

describe("getHueByCoordinates", () => {
  it("should return the hue", () => {
    expect(getHueByCoordinates(0, 100)).toBe(0);
    expect(getHueByCoordinates(50, 100)).toBe(180);
    expect(getHueByCoordinates(100, 100)).toBe(360);
  });
});
