import { Color } from "../../utils/toColor";

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
   * `Color`.
   * @see [WHAT IS "COLOR"?](https://github.com/Wondermarin/react-color-palette#color)
   */
  readonly color: Color;
  /**
   * The function that accepts the updated `Color` as a single argument.
   * @see [WHAT IS "COLOR"?](https://github.com/Wondermarin/react-color-palette#color)
   */
  readonly onChange: (color: Color) => void;
  /**
   * Color theme.
   */
  readonly dark?: boolean;
  /**
   * Hide RGB field
   */
  readonly hideRGB?: boolean;
  /**
   * Hide HEX field
   */
  readonly hideHEX?: boolean;
  /**
   * Hide HSB field
   */
  readonly hideHSB?: boolean;
}
