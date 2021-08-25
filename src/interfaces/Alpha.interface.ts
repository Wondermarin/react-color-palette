import { Color } from "./Color.interface";

export interface AlphaProps {
  readonly width: number;
  readonly color: Color;
  readonly onChange: React.Dispatch<React.SetStateAction<Color>>;
  readonly onUpdated: (color: Color) => void;
}
