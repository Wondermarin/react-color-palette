import { useColorObject } from "./useColorObject";
import { renderHook } from "@testing-library/react-hooks";
import { ColorObject } from "../toColorObject";

describe("useColorObject", () => {
  it("should return `ColorObject` of red color, then of blue color", () => {
    const redColorObject: ColorObject = {
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

    const { result } = renderHook(() => useColorObject("hex", "#ff0000"));
    const [color, setColor] = result.current;

    expect(color).toStrictEqual(redColorObject);
    expect(setColor).toBeDefined();
  });
});
