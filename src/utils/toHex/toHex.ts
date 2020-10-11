import { createCanvas } from "canvas";

/**
 * Converts 3 digit HEX and HTML Color Names to 6 digit HEX.
 * @param color 3 digit HEX or HTML Color Names.
 */
export function toHex(color: string): string {
  const ctx = createCanvas(1, 1).getContext("2d");

  ctx.fillStyle = color;

  return ctx.fillStyle;
}
