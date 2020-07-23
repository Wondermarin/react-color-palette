import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import { ColorPicker } from "./ColorPicker";
import { Hue } from "./Hue";
import { ColorInput } from "./ColorInput";

import { color2colorObject } from "./utils";
import { lightTheme } from "./theme";

import { StyleProps, PaletteBodyStyleProps, ColorPaletteProps } from "./types";

const Palette = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  background-color: ${({ theme }: StyleProps) => theme.background};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;
`;

const PaletteBody = styled.div<PaletteBodyStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.width - 20}px;
  padding: 10px 0;
`;

const ColorPalette = ({ width, color, onChange }: ColorPaletteProps) => {
  const [currentColor, setCurrentColor] = useState(
    typeof color === "string" ? color2colorObject(color, true, "HEX") : color
  );
  const [hue, setHue] = useState(0);

  useEffect(() => {
    onChange(currentColor);
  }, [currentColor, onChange]);

  return (
    <ThemeProvider theme={lightTheme}>
      <Palette>
        <ColorPicker
          width={width}
          color={currentColor}
          setColor={setCurrentColor}
          hue={hue}
          setHue={setHue}
        />
        <PaletteBody width={width}>
          <Hue
            width={width}
            color={currentColor}
            setColor={setCurrentColor}
            hue={hue}
            setHue={setHue}
          />
          <ColorInput color={currentColor} setColor={setCurrentColor} />
        </PaletteBody>
      </Palette>
    </ThemeProvider>
  );
};

export default ColorPalette;
