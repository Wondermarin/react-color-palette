import { ColorObject } from "../toColorObject";

/**
 * Converts HEX to RGB.
 * @param hex 6 digit HEX.
 */
export function hex2rgb(hex: string): ColorObject["rgb"] {
  const hexInt = parseInt(hex.slice(1), 16);
  const R = (hexInt >> 16) & 255;
  const G = (hexInt >> 8) & 255;
  const B = hexInt & 255;

  return {
    r: R,
    g: G,
    b: B,
  };
}
