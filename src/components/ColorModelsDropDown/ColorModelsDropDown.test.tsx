import React, { useState } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { ColorModels } from "../../utils";
import { render } from "@testing-library/react";
import { ColorModelsDropDown } from "./ColorModelsDropDown";

describe("ColorModelsDropDown", () => {
  it("the component must be rendered and display HEX color model", () => {
    const { result } = renderHook(() => useState<ColorModels>("hex"));
    const [model, setModel] = result.current;

    const { getAllByText } = render(<ColorModelsDropDown model={model} setModel={setModel} />);

    getAllByText("HEX");
  });
});
