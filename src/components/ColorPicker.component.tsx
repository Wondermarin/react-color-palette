import React from "react";
import { ColorPickerProps } from "../interfaces/ColorPicker.interface";
import { Saturation } from "./Saturation.component";
import { Hue } from "./Hue.component";
import { Fields } from "./Fields.component";

export const ColorPicker = ({
  width,
  height = width,
  color,
  onChange,
  hideHEX = false,
  hideRGB = false,
  hideHSV = false,
  dark = false,
}: ColorPickerProps): JSX.Element => (
  <div className={`rcp ${dark ? "rcp-dark" : "rcp-light"}`} style={{ width }}>
    <Saturation width={width} height={height} color={color} onChange={onChange} />
    <div className="rcp-body">
      <Hue width={width - 40} color={color} onChange={onChange} />
      <Fields color={color} hideHEX={hideHEX} hideRGB={hideRGB} hideHSV={hideHSV} onChange={onChange} />
    </div>
  </div>
);
