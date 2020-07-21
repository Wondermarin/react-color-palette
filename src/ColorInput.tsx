import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ColorModelDropdown } from "./ColorModelDropdown";

import { isValidHex, color2colorObject, changeColorType } from "./utils";

import { StyleProps, ColorInputStyleProps, ColorInputProps } from "./types";

const SelectedField = styled.div`
  display: flex;
  margin: 10px 0 0;
`;

const Input = styled.input<ColorInputStyleProps>`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }: StyleProps) => theme.text};
  border: 2px solid ${({ theme }: StyleProps) => theme.dropDownBg};
  border-radius: ${props => (props.lastInput ? "0 5px 5px 0" : 0)};
  outline: none;
  padding: 0 5px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ColorInput = ({ color, setColor }: ColorInputProps) => {
  const [value, setValue] = useState(color);
  const [colorModel, setColorModel] = useState("HEX");

  useEffect(() => {
    if (!color.inputted) setValue(color);
  }, [color]);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (colorModel === "HEX") {
      const newColorObject = {
        ...color,
        hex: e.target.value,
      };

      if (isValidHex(e.target.value)) {
        setColor(color2colorObject(e.target.value, true, colorModel));
      }

      setValue(newColorObject);
    } else {
      if (
        (/\d/.test(e.target.value) && e.target.valueAsNumber <= 255) ||
        e.target.value === ""
      ) {
        const red =
          e.target.id === "red" ? e.target.valueAsNumber : color.rgb[0];
        const green =
          e.target.id === "green" ? e.target.valueAsNumber : color.rgb[1];
        const blue =
          e.target.id === "blue" ? e.target.valueAsNumber : color.rgb[2];

        const newColor: [number, number, number] = [red, green, blue];
        const newColorObject = {
          ...color,
          rgb: newColor,
        };

        setColor(color2colorObject(newColor, true, colorModel));
        setValue(newColorObject);
      }
    }
  };

  const blur = () => setColor(changeColorType(color));

  return (
    <SelectedField>
      <ColorModelDropdown model={colorModel} setModel={setColorModel} />
      {colorModel === "HEX" ? (
        <Input
          style={{
            backgroundColor: `rgba(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}, 0.2)`,
          }}
          type="text"
          value={value.hex}
          lastInput={true}
          onChange={change}
          onBlur={blur}
        />
      ) : (
        <>
          <Input
            id="red"
            style={{
              backgroundColor: `rgba(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}, 0.2)`,
            }}
            type="number"
            min={0}
            max={255}
            value={value.rgb[0]}
            onChange={change}
            onBlur={blur}
          />
          <Input
            id="green"
            style={{
              backgroundColor: `rgba(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}, 0.2)`,
            }}
            type="number"
            min={0}
            max={255}
            value={value.rgb[1]}
            onChange={change}
            onBlur={blur}
          />
          <Input
            id="blue"
            style={{
              backgroundColor: `rgba(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}, 0.2)`,
            }}
            type="number"
            min={0}
            max={255}
            value={value.rgb[2]}
            lastInput={true}
            onChange={change}
            onBlur={blur}
          />
        </>
      )}
    </SelectedField>
  );
};
