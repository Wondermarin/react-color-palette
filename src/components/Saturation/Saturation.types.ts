import { Color } from "../../utils/toColor";

export interface SaturationProps {
  readonly width: number;
  readonly height: number;
  readonly color: Color;
  readonly onChange: (color: Color) => void;
}
