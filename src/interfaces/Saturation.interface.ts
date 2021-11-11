import { Color } from "./Color.interface";
import { OnChangeCallback } from "./ColorPicker.interface";

export interface SaturationProps {
  readonly width: number;
  readonly height: number;
  readonly color: Color;
  readonly onChange: OnChangeCallback;
  readonly onChangeComplete?: OnChangeCallback;
}
