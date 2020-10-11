import React from "react";
import { ColorPickerProps } from "./ColorPicker.types";
import { S } from "./ColorPicker.styles";
import { Saturation } from "../Saturation";
import { HueBar } from "../HueBar";
import { Fields } from "../Fields";

const ColorPicker = ({ width, height = width, color, onChange }: ColorPickerProps): JSX.Element => (
  <S.ColorPicker>
    <Saturation width={width} height={height} color={color} setColor={onChange} />
    <S.ColorPickerBody width={width}>
      <HueBar width={width - 20} color={color} setColor={onChange} />
      <Fields color={color} setColor={onChange} />
    </S.ColorPickerBody>
  </S.ColorPicker>
);

export default ColorPicker;
