import { Color } from "../toColor";

/**
 * Converts HEX to RGB.
 * @param hex 6 digit HEX.
 */
export function hex2rgb(hex: string): Color["rgb"] {
  const hexInt = parseInt(hex.slice(1), 16);

  const r = (hexInt >> 16) & 255;
  const g = (hexInt >> 8) & 255;
  const b = hexInt & 255;

  return {
    r,
    g,
    b,
  };
}
