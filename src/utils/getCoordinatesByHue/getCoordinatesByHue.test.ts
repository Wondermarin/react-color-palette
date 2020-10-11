import { getCoordinatesByHue } from "./getCoordinatesByHue";

describe("getCoordinatesByHue", () => {
  it("should return the coordinates", () => {
    expect(getCoordinatesByHue(0, 100)).toBe(0);
    expect(getCoordinatesByHue(180, 100)).toBe(50);
    expect(getCoordinatesByHue(360, 100)).toBe(100);
  });
});
