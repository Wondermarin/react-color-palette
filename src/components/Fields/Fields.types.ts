import { Color } from "../../utils/toColor";

export interface UpperFloorProps {
  readonly color: Color;
  readonly hideHEX: boolean;
  readonly onChange: (color: Color) => void;
}

export interface LowerFloorProps {
  readonly color: Color;
  readonly hideRGB: boolean;
  readonly hideHSB: boolean;
  readonly onChange: (color: Color) => void;
}

export interface FieldsProps {
  readonly color: Color;
  readonly hideHEX: boolean;
  readonly hideRGB: boolean;
  readonly hideHSB: boolean;
  readonly onChange: (color: Color) => void;
}
