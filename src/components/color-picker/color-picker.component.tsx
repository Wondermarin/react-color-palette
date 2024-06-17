import React, { memo } from "react";

import { type IColor } from "@/services/color";

import { isFieldHide } from "@/utils/is-field-hide";

import { Alpha } from "../alpha";
import { Fields } from "../fields";
import { Hue } from "../hue";
import { Saturation } from "../saturation";

interface IColorPickerProps {
  readonly height?: number;
  readonly hideAlpha?: boolean;
  readonly hideInput?: (keyof IColor)[] | boolean;
  readonly color: IColor;
  readonly onChange: (color: IColor) => void;
  readonly onChangeComplete?: (color: IColor) => void;
}

export const ColorPicker = memo(
  ({ height = 200, hideAlpha = false, hideInput = false, color, onChange, onChangeComplete }: IColorPickerProps) => (
    <div className="rcp-root rcp">
      <Saturation height={height} color={color} onChange={onChange} onChangeComplete={onChangeComplete} />
      <div className="rcp-body">
        <section className="rcp-section">
          <Hue color={color} onChange={onChange} />
          {!hideAlpha && <Alpha color={color} onChange={onChange} onChangeComplete={onChangeComplete} />}
        </section>
        {(!isFieldHide(hideInput, "hex") || !isFieldHide(hideInput, "rgb") || !isFieldHide(hideInput, "hsv")) && (
          <section className="rcp-section">
            <Fields hideInput={hideInput} color={color} onChange={onChange} />
          </section>
        )}
      </div>
    </div>
  )
);
