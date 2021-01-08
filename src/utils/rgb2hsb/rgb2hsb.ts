import { Color } from "../toColor";

/**
 * Converts RGB to HSB.
 * @param r Red.
 * @param g Green.
 * @param b Blue.
 */
export function rgb2hsb(r: number, g: number, b: number): Color["hsb"] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  const d = max - min;

  let H = 0;
  const S = max === 0 ? 0 : d / max;
  const B = max;

  if (max !== min) {
    switch (max) {
      case r:
        H = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        H = (b - r) / d + 2;
        break;
      case b:
        H = (r - g) / d + 4;
        break;
    }

    H /= 6;
  }

  return {
    h: H * 360,
    s: S * 100,
    b: B * 100,
  };
}
