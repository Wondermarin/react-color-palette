import { Color } from "./Color.interface";

export interface UpperFloorProps {
  readonly color: Color;
  readonly hideHEX: boolean;
  readonly onChange: React.Dispatch<React.SetStateAction<Color>>;
}

export interface LowerFloorProps {
  readonly color: Color;
  readonly hideRGB: boolean;
  readonly hideHSV: boolean;
  readonly onChange: React.Dispatch<React.SetStateAction<Color>>;
}

export interface FieldsProps {
  readonly color: Color;
  readonly hideHEX: boolean;
  readonly hideRGB: boolean;
  readonly hideHSV: boolean;
  readonly onChange: React.Dispatch<React.SetStateAction<Color>>;
}
