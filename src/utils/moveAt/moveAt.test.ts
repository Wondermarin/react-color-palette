import { moveAt } from "./moveAt";

describe("moveAt", () => {
  it("should return one new coordinate", () => {
    expect(moveAt({ value: -1, shift: 10, min: 0, max: 100 })).toEqual([0]);
    expect(moveAt({ value: 54, shift: 10, min: 0, max: 100 })).toEqual([44]);
    expect(moveAt({ value: 111, shift: 10, min: 0, max: 100 })).toEqual([100]);
  });

  it("should return two new coordinate", () => {
    expect(moveAt({ value: 23, shift: 1, min: 0, max: 100 }, { value: 0, shift: 3, min: 0, max: 100 })).toEqual([
      22,
      0,
    ]);
    expect(moveAt({ value: 23, shift: 1, min: 0, max: 100 }, { value: 13, shift: 3, min: 0, max: 100 })).toEqual([
      22,
      10,
    ]);
    expect(moveAt({ value: 23, shift: 1, min: 0, max: 100 }, { value: 113, shift: 3, min: 0, max: 100 })).toEqual([
      22,
      100,
    ]);
  });
});
