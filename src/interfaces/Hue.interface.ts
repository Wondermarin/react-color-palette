import { Color } from "./Color.interface";
import { OnChangeCallback } from "./ColorPicker.interface";

export interface HueProps {
  readonly width: number;
  readonly color: Color;
  readonly onChange: OnChangeCallback;
  readonly onChangeComplete?: OnChangeCallback;
}
