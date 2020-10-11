/**
 * Converts hue to coordinates.
 * @param hue Hue.
 * @param width The width of the canvas.
 */
export function getCoordinatesByHue(hue: number, width: number): number {
  let x = (hue / 360) * width;

  if (hue <= 0) {
    x = 0;
  } else if (hue >= 360) {
    x = width;
  }

  return x;
}
