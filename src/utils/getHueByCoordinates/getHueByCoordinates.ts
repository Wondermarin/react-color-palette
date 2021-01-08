/**
 * Converts coordinates to hue.
 * @param x X-coordinate.
 * @param width The width of the canvas.
 */
export function getHueByCoordinates(x: number, width: number): number {
  const h = (x / width) * 360;

  return h;
}
