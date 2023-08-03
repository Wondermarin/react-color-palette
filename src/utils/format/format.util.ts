import { type IColor } from "@/services/color";

import { float } from "../float";

export function formatRgb({ r, g, b, a }: IColor["rgb"]) {
  const rgb: any[] = [Math.round(r), Math.round(g), Math.round(b)];
  const alpha = float(a, 3);

  if (alpha < 1) rgb.push(alpha);

  return rgb.join(", ");
}

export function formatHsv({ h, s, v, a }: IColor["hsv"]) {
  const hsv: any[] = [`${Math.round(h)}°`, `${Math.round(s)}%`, `${Math.round(v)}%`];
  const alpha = float(a, 3);

  if (alpha < 1) hsv.push(alpha);

  return hsv.join(", ");
}
