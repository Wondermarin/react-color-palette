import { toHex } from "./toHex";

describe("toHex", () => {
  it("should return a 6 digit HEX", () => {
    expect(toHex("#72a")).toStrictEqual("#7722aa");
    expect(toHex("red")).toStrictEqual("#ff0000");
    expect(toHex("#72aef6")).toStrictEqual("#72aef6");
  });
});
