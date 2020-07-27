import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import { Saturation } from "./Saturation";
import { Hue } from "./Hue";
import { ColorInput } from "./ColorInput";

import { color2colorObject } from "./utils";
import { lightTheme, Theme } from "./theme";

export interface StyleProps {
  theme: Theme;
}

export interface ColorObject {
  hsb: number[];
  rgb: number[];
  hex: string;
  inputted: boolean;
}

interface ColorPickerOptionsProps {
  paletteWidth: number;
}

interface ColorPickerProps {
  width: number;
  color: string;
  onChange: (color: ColorObject) => void;
}

const ColorPickerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: max-content;

  background-color: ${({ theme }: StyleProps) => theme.background};
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

const ColorPicker = ({ width, color, onChange }: ColorPickerProps) => {
  const [currentColor, setCurrentColor] = useState(
    color2colorObject(color, true, "HEX")
  );
  const [hue, setHue] = useState(0);

  useEffect(() => {
    onChange(currentColor);
  }, [currentColor, onChange]);

  return (
    <ThemeProvider theme={lightTheme}>
      <ColorPickerBody>
        <Saturation
          paletteWidth={width}
          color={currentColor}
          setColor={setCurrentColor}
          hue={hue}
          setHue={setHue}
        />
        <ColorPickerOptions paletteWidth={width}>
          <Hue
            paletteWidth={width}
            color={currentColor}
            setColor={setCurrentColor}
            hue={hue}
            setHue={setHue}
          />
          <ColorInput color={currentColor} setColor={setCurrentColor} />
        </ColorPickerOptions>
      </ColorPickerBody>
    </ThemeProvider>
  );
};

export default ColorPicker;
