import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useColorObject } from "../../utils";
import { render } from "@testing-library/react";
import { Fields } from "./Fields";

describe("Fields", () => {
  it("the component must be rendered and display the correct color", () => {
    const { result } = renderHook(() => useColorObject("hex", "red"));
    const [color, setColor] = result.current;

    const { getByDisplayValue } = render(<Fields color={color} setColor={setColor} />);

    getByDisplayValue("#ff0000");
  });
});
