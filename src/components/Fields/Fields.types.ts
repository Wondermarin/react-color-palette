import { Color } from "../../utils/toColor";

export interface FieldsProps {
  readonly color: Color;
  readonly hideRGB: boolean;
  readonly hideHEX: boolean;
  readonly hideHSB: boolean;
  readonly onChange: (color: Color) => void;
}
