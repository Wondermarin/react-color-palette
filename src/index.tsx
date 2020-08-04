import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Saturation } from "./Saturation";
import { Hue } from "./Hue";
import { ColorInput } from "./ColorInput";

import { color2colorObject } from "./utils";

export interface ColorObject {
  hsb: [number, number, number];
  rgb: [number, number, number];
  hex: string;
  inputted: boolean;
}

interface ColorPickerOptionsProps {
  paletteWidth: number;
}

interface ColorPickerProps {
  width: number;
  height?: number;
  defaultColor: string;
  onChange: (color: ColorObject) => void;
}

const ColorPickerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: max-content;

  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;
`;

const ColorPickerOptions = styled.div<ColorPickerOptionsProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${props => props.paletteWidth - 20}px;

  padding: 10px 0;
`;

const ColorPicker = ({
  width,
  height = width,
  defaultColor,
  onChange,
}: ColorPickerProps) => {
  const [currentColor, setCurrentColor] = useState(
    color2colorObject(defaultColor, true, "HEX")
  );

  useEffect(() => {
    onChange(currentColor);
    // eslint-disable-next-line
  }, [currentColor]);

  return (
    <ColorPickerBody>
      <Saturation
        paletteWidth={width}
        paletteHeight={height}
        color={currentColor}
        setColor={setCurrentColor}
      />
      <ColorPickerOptions paletteWidth={width}>
        <Hue
          paletteWidth={width}
          color={currentColor}
          setColor={setCurrentColor}
        />
        <ColorInput color={currentColor} setColor={setCurrentColor} />
      </ColorPickerOptions>
    </ColorPickerBody>
  );
};

export default ColorPicker;
