import { ColorObject } from "../toColorObject";

/**
 * Converts `ColorObject` to coordinates.
 * @param color `ColorObject`.
 * @param width The width of the canvas.
 * @param height The height of the canvas.
 */
export function getCoordinatesByColor(color: ColorObject, width: number, height: number): [number, number] {
  const { s, b } = color.hsb;

  const X = width / 100;
  const Y = height / 100;

  const x = s * X;
  const y = (100 - b) * Y;

  return [x, y];
}
