/**
 * Converts hue to coordinates.
 * @param h Hue.
 * @param width The width of the canvas.
 */
export function getCoordinatesByHue(h: number, width: number): number {
  const x = (h / 360) * width;

  return x;
}
