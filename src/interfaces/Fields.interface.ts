import { Color } from "./Color.interface";
import { OnChangeCallback } from "./ColorPicker.interface";

export interface UpperFloorProps {
  readonly color: Color;
  readonly hideHEX: boolean;
  readonly onChange: OnChangeCallback;
  readonly onChangeComplete: OnChangeCallback;
}

export interface LowerFloorProps {
  readonly color: Color;
  readonly hideRGB: boolean;
  readonly hideHSV: boolean;
  readonly alpha: boolean;
  readonly onChange: OnChangeCallback;
}

export interface FieldsProps {
  readonly color: Color;
  readonly hideHEX: boolean;
  readonly hideRGB: boolean;
  readonly hideHSV: boolean;
  readonly alpha: boolean;
  readonly onChange: OnChangeCallback;
  readonly onChangeComplete: OnChangeCallback;
}
