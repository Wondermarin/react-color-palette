import React, { Dispatch, useState, useEffect } from "react";
import styled from "styled-components";

import { ColorModelDropdown } from "./ColorModelDropdown";

import { isValidHex, color2colorObject, changeColorType } from "./utils";

import { ColorObject, StyleProps } from ".";

export interface InputProps {
  lastInput?: boolean;
}

export interface ColorInputProps {
  color: ColorObject;
  setColor: Dispatch<ColorObject>;
}

const SelectedField = styled.div`
  display: flex;

  margin: 10px 0 0;
`;

const Input = styled.input<InputProps>`
  width: 100%;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;

  color: ${({ theme }: StyleProps) => theme.text};

  border: 2px solid ${({ theme }: StyleProps) => theme.dropDownBg};
  border-radius: ${props => (props.lastInput ? "0 5px 5px 0" : 0)};

  padding: 0 5px;

  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;

    -webkit-appearance: none;
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
    } else if (colorModel === "RGB") {
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
    } else {
      if (e.target.id === "hue") {
        if (
          (/\d/.test(e.target.value) && e.target.valueAsNumber <= 360) ||
          e.target.value === ""
        ) {
          const newColor: [number, number, number] = [
            e.target.valueAsNumber,
            color.hsb[1],
            color.hsb[2],
          ];
          const newColorObject = {
            ...color,
            hsb: newColor,
          };

          setColor(color2colorObject(newColor, true, colorModel));
          setValue(newColorObject);
        }
      } else {
        if (
          (/\d/.test(e.target.value) && e.target.valueAsNumber <= 100) ||
          e.target.value === ""
        ) {
          const saturation =
            e.target.id === "saturation"
              ? e.target.valueAsNumber
              : color.hsb[1];
          const brightness =
            e.target.id === "brightness"
              ? e.target.valueAsNumber
              : color.hsb[2];

          const newColor: [number, number, number] = [
            color.hsb[0],
            saturation,
            brightness,
          ];
          const newColorObject = {
            ...color,
            hsb: newColor,
          };

          setColor(color2colorObject(newColor, true, colorModel));
          setValue(newColorObject);
        }
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
            id={colorModel === "RGB" ? "red" : "hue"}
            style={{
              backgroundColor: `rgba(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}, 0.2)`,
            }}
            type="number"
            min={0}
            max={colorModel === "RGB" ? 255 : 360}
            value={colorModel === "RGB" ? value.rgb[0] : value.hsb[0].toFixed()}
            onChange={change}
            onBlur={blur}
          />
          <Input
            id={colorModel === "RGB" ? "green" : "saturation"}
            style={{
              backgroundColor: `rgba(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}, 0.2)`,
            }}
            type="number"
            min={0}
            max={colorModel === "RGB" ? 255 : 100}
            value={colorModel === "RGB" ? value.rgb[1] : value.hsb[1].toFixed()}
            onChange={change}
            onBlur={blur}
          />
          <Input
            id={colorModel === "RGB" ? "blue" : "brightness"}
            style={{
              backgroundColor: `rgba(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]}, 0.2)`,
            }}
            type="number"
            min={0}
            max={colorModel === "RGB" ? 255 : 100}
            value={colorModel === "RGB" ? value.rgb[2] : value.hsb[2].toFixed()}
            lastInput={true}
            onChange={change}
            onBlur={blur}
          />
        </>
      )}
    </SelectedField>
  );
};
