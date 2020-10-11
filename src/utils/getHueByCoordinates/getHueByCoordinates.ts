/**
 * Converts coordinates to hue.
 * @param x X-coordinate.
 * @param width The width of the canvas.
 */
export function getHueByCoordinates(x: number, width: number): number {
  let h = (x / width) * 360;

  if (x <= 0) {
    h = 0;
  } else if (x >= width) {
    h = 360;
  }

  return h;
}
