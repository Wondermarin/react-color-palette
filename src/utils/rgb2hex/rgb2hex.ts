import { ColorObject } from "../toColorObject";

/**
 * Converts RGB to HEX.
 * @param r Red.
 * @param g Green.
 * @param b Blue.
 */
export function rgb2hex(r: number, g: number, b: number): ColorObject["hex"] {
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  return hex;
}
