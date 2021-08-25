import React from "react";
import { ColorPickerProps } from "../interfaces/ColorPicker.interface";
import { Alpha } from "./Alpha.component";
import { Saturation } from "./Saturation.component";
import { Hue } from "./Hue.component";
import { Fields } from "./Fields.component";
import { noop } from "../utils/noop.util";

export const ColorPicker = ({
  width,
  height = width,
  color,
  onChange,
  onUpdated,
  hideHEX = false,
  hideRGB = false,
  hideHSV = false,
  alpha = false,
  dark = false,
  hideLabels = false,
}: ColorPickerProps): JSX.Element => {
  onUpdated = onUpdated || noop;

  return (
    <div className={`rcp ${dark ? "rcp-dark" : "rcp-light"}`} style={{ width }}>
      <Saturation width={width} height={height} color={color} onChange={onChange} onUpdated={onUpdated} />
      <div className="rcp-body">
        <Hue width={width - 40} color={color} onChange={onChange} onUpdated={onUpdated} />
        {alpha && <Alpha width={width - 40} color={color} onChange={onChange} onUpdated={onUpdated} />}
        <Fields
          color={color}
          hideHEX={hideHEX}
          hideRGB={hideRGB}
          hideHSV={hideHSV}
          hideLabels={hideLabels}
          alpha={alpha}
          onChange={onChange}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  );
};
