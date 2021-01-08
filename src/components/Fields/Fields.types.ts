import { Color } from "../../utils/toColor";

export interface FieldsProps {
  readonly color: Color;
  readonly onChange: (color: Color) => void;
}
