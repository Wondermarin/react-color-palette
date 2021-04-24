import { Color } from "./Color.interface";

export interface SaturationProps {
  readonly width: number;
  readonly height: number;
  readonly color: Color;
  readonly onChange: React.Dispatch<React.SetStateAction<Color>>;
}
