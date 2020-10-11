import { ColorObject, toColorObject } from "../toColorObject";

/**
 * Converts coordinates to the `ColorObject`.
 * @param hue Hue.
 * @param x X-coordinate.
 * @param y Y-coordinate.
 * @param width The width of the canvas.
 * @param height The height of the canvas.
 */
export function getColorByCoordinates(hue: number, x: number, y: number, width: number, height: number): ColorObject {
  const X = width / 100;
  const Y = height / 100;

  const s = x < 0 ? 0 : x > width ? 100 : x / X;
  const b = y < 0 ? 0 : y > height ? 100 : y / Y;

  const saturation = s;
  const brightness = 100 - b;

  const hsb = { h: hue, s: saturation, b: brightness };

  return toColorObject("hsb", hsb);
}
