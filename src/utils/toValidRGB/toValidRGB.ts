import { Color } from "../toColor";

/**
 * Converts the value to a valid RGB color.
 * @param value Converted value.
 */
export function toValidRGB(value: string[]): Color["rgb"] {
  const rgb = value.map((v) => {
    if (Number(v) < 0) return 0;
    else if (Number(v) > 255) return 255;
    else return Number(v);
  });

  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
  };
}
