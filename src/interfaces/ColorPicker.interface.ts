import { Color } from "./Color.interface";

export type OnChangeCallback = (color: Color) => void;

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
  readonly onChange: OnChangeCallback;
  /**
   * .
   */
  readonly onChangeComplete: OnChangeCallback;
  /**
   * Hide HEX field.
   */
  readonly hideHEX?: boolean;
  /**
   * Hide RGB field.
   */
  readonly hideRGB?: boolean;
  /**
   * Hide HSV field.
   */
  readonly hideHSV?: boolean;
  /**
   * Enable alpha channel.
   */
  readonly alpha?: boolean;
  /**
   * Color theme.
   */
  readonly dark?: boolean;
}
