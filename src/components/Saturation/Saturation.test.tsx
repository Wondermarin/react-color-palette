import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useColorObject } from "../../utils/useColorObject";
import renderer from "react-test-renderer";
import { Saturation } from "./Saturation";
import "jest-styled-components";

describe("Saturation", () => {
  it("the component must be rendered", () => {
    const { result } = renderHook(() => useColorObject("hex", "blue"));
    const [color, setColor] = result.current;

    const tree = renderer.create(<Saturation width={400} height={400} color={color} setColor={setColor} />).toJSON();

    expect(tree).toHaveStyleRule("display", "flex");
  });
});
