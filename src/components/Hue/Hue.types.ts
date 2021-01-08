import { Color } from "../../utils/toColor";

export interface HueProps {
  readonly width: number;
  readonly color: Color;
  readonly onChange: (color: Color) => void;
}
