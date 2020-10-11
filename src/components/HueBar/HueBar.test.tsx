import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useColorObject } from "../../utils/useColorObject";
import renderer from "react-test-renderer";
import { HueBar } from "./HueBar";
import "jest-styled-components";

describe("HueBar", () => {
  it("the component must be rendered and display hue bar", () => {
    const { result } = renderHook(() => useColorObject("hex", "red"));
    const [color, setColor] = result.current;

    const tree = renderer.create(<HueBar width={380} color={color} setColor={setColor} />).toJSON();

    expect(tree).toHaveStyleRule("width", "380px");
    expect(tree).toHaveStyleRule(
      "background-image",
      "linear-gradient( to right, rgb(255,0,0), rgb(255,255,0), rgb(0,255,0), rgb(0,255,255), rgb(0,0,255), rgb(255,0,255), rgb(255,0,0) )"
    );
  });
});
