import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useColorObject } from "../../utils";
import renderer from "react-test-renderer";
import ColorPicker from "./ColorPicker";
import "jest-styled-components";

describe("ColorPicker", () => {
  it("the component must be rendered", () => {
    const { result } = renderHook(() => useColorObject("hex", "red"));
    const [color, setColor] = result.current;

    const tree = renderer.create(<ColorPicker width={400} color={color} onChange={setColor} />).toJSON();

    expect(tree).toHaveStyleRule("display", "flex");
  });
});
