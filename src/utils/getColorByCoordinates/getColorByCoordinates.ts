import { Color, toColor } from "../toColor";

/**
 * Converts coordinates to `Color`.
 * @param h Hue.
 * @param x X-coordinate.
 * @param y Y-coordinate.
 * @param width The width of the canvas.
 * @param height The height of the canvas.
 * @see [WHAT IS "COLOR"?](https://github.com/Wondermarin/react-color-palette#color)
 */
export function getColorByCoordinates(h: number, x: number, y: number, width: number, height: number): Color {
  const s = (x / width) * 100;
  const b = (y / height) * 100;

  return toColor("hsb", { h, s, b: 100 - b });
}
