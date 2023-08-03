import React, { memo } from "react";

import { type IColor } from "@/services/color";

import { Alpha } from "../alpha";
import { Fields } from "../fields";
import { Hue } from "../hue";
import { Saturation } from "../saturation";

interface IColorPickerProps {
  readonly height?: number;
  readonly hideAlpha?: boolean;
  readonly hideInput?: boolean;
  readonly color: IColor;
  readonly onChange: (color: IColor) => void;
}

export const ColorPicker = memo(
  ({ height = 200, hideAlpha = false, hideInput = false, color, onChange }: IColorPickerProps) => (
    <div className="rcp-root rcp">
      <Saturation height={height} color={color} onChange={onChange} />
      <div className="rcp-body">
        <section className="rcp-section">
          <Hue color={color} onChange={onChange} />
          {!hideAlpha && <Alpha color={color} onChange={onChange} />}
        </section>
        {!hideInput && (
          <section className="rcp-section">
            <Fields color={color} onChange={onChange} />
          </section>
        )}
      </div>
    </div>
  )
);
