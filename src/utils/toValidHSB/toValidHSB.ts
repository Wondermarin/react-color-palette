import { Color } from "../toColor";

/**
 * Converts the value to a valid HSB color.
 * @param value Converted value.
 */
export function toValidHSB(value: string[]): Color["hsb"] {
  const hsb = value.map((v, index) => {
    if (Number(v) < 0) return 0;
    else if (index === 0 && Number(v) > 360) return 360;
    else if (index !== 0 && Number(v) > 100) return 100;
    else return Number(v);
  });

  return {
    h: hsb[0],
    s: hsb[1],
    b: hsb[2],
  };
}
