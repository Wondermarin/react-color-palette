import { Color } from "./Color.interface";

export interface ColorPickerProps {
  /**
   * The width of the color picker.
   */
  readonly width: number;
  /**
   * The height of the color picker.
   */
  readonly height?: number;
  /**
   * The current [Color](https://github.com/Wondermarin/react-color-palette#color).
   */
  readonly color: Color;
  /**
   * The function that accepts the updated [Color](https://github.com/Wondermarin/react-color-palette#color) as a single argument.
   */
  readonly onChange: React.Dispatch<React.SetStateAction<Color>>;
  /**
   * Hide HEX field.
   */
  readonly hideHEX?: boolean;
  /**
   * Hide RGB field.
   */
  readonly hideRGB?: boolean;
  /**
   * Hide HSB field.
   */
  readonly hideHSB?: boolean;
  /**
   * Color theme.
   */
  readonly dark?: boolean;
}
