import { Color } from "../toColor";

/**
 * Converts `Color` to coordinates.
 * @param color `Color`.
 * @param width The width of the canvas.
 * @param height The height of the canvas.
 * @see [WHAT IS "COLOR"?](https://github.com/Wondermarin/react-color-palette#color)
 */
export function getCoordinatesByColor(color: Color, width: number, height: number): [number, number] {
  const { s, b } = color.hsb;

  const x = (s / 100) * width;
  const y = ((100 - b) / 100) * height;

  return [x, y];
}
