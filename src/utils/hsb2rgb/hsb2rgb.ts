import { Color } from "../toColor";

/**
 * Converts HSB to RGB.
 * @param h Hue.
 * @param s Saturation.
 * @param b Brightness.
 */
export function hsb2rgb(h: number, s: number, b: number): Color["rgb"] {
  s /= 100;
  b /= 100;

  const i = ~~(h / 60);
  const f = h / 60 - i;
  const p = b * (1 - s);
  const q = b * (1 - s * f);
  const t = b * (1 - s * (1 - f));

  let R: number;
  let G: number;
  let B: number;

  switch (i) {
    case 0:
    case 6:
    default:
      R = b;
      G = t;
      B = p;
      break;
    case 1:
      R = q;
      G = b;
      B = p;
      break;
    case 2:
      R = p;
      G = b;
      B = t;
      break;
    case 3:
      R = p;
      G = q;
      B = b;
      break;
    case 4:
      R = t;
      G = p;
      B = b;
      break;
    case 5:
      R = b;
      G = p;
      B = q;
      break;
  }

  return {
    r: Math.round(R * 255),
    g: Math.round(G * 255),
    b: Math.round(B * 255),
  };
}
