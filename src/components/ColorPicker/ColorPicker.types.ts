import { ColorObject } from "../../utils";

export interface ColorPickerProps {
  /**
   * The width of the color picker.
   */
  width: number;
  /**
   * The height of the color picker.
   */
  height?: number;
  /**
   * Color in the `ColorObject`.
   */
  color: ColorObject;
  /**
   * The function that accepts the updated `ColorObject` as a single argument.
   */
  onChange: (color: ColorObject) => void;
}

export interface ColorPickerBodyProps {
  width: number;
}
