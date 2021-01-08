import { Color } from "../toColor";

/**
 * Converts RGB to HEX.
 * @param r Red.
 * @param g Green.
 * @param b Blue.
 */
export function rgb2hex(r: number, g: number, b: number): Color["hex"] {
  const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return `#${hex}`;
}
