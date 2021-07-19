import { Color } from "../interfaces/Color.interface";
import { clamp } from "./clamp.util";

export function toHex(value: string): Color["hex"] {
  if (!value.startsWith("#")) {
    const ctx = document.createElement("canvas").getContext("2d");

    if (!ctx) {
      throw new Error("2d context not supported or canvas already initialized");
    }

    ctx.fillStyle = value;

    return ctx.fillStyle;
  } else if (value.length === 4 || value.length === 5) {
    value = value
      .split("")
      .map((v, i) => (i === 0 ? "#" : v + v))
      .join("");

    return value;
  } else if (value.length === 7 || value.length === 9) {
    return value;
  }

  return "#000000";
}

export function toRgb(value: string[]): Color["rgb"] {
  const [r, g, b, a] = value.map((v, i) => (i < 3 ? clamp(Number(v), 255, 0) : clamp(Number(v), 1, 0)));

  return { r, g, b, a };
}

export function toHsv(value: string[]): Color["hsv"] {
  const [h, s, v, a] = value.map((v, i) => clamp(Number(v), i === 0 ? 360 : i < 3 ? 100 : 1, 0));

  return { h, s, v, a };
}

export function hex2rgb(hex: Color["hex"]): Color["rgb"] {
  hex = hex.slice(1);

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = parseInt(hex.slice(6, 8), 16);

  return { r, g, b, a: Number.isNaN(a) ? undefined : a / 255 };
}

export function rgb2hsv({ r, g, b, a }: Color["rgb"]): Color["hsv"] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);

  const h = d ? (max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? 2 + (b - r) / d : 4 + (r - g) / d) * 60 : 0;
  const s = max ? (d / max) * 100 : 0;
  const v = max * 100;

  return { h, s, v, a };
}

export function hsv2rgb({ h, s, v, a }: Color["hsv"]): Color["rgb"] {
  s /= 100;
  v /= 100;

  const i = ~~(h / 60);
  const f = h / 60 - i;
  const p = v * (1 - s);
  const q = v * (1 - s * f);
  const t = v * (1 - s * (1 - f));
  const index = i % 6;

  const r = Math.round([v, q, p, p, t, v][index] * 255);
  const g = Math.round([t, v, v, q, p, p][index] * 255);
  const b = Math.round([p, p, t, v, v, q][index] * 255);

  return { r, g, b, a };
}

export function rgb2hex({ r, g, b, a }: Color["rgb"]): Color["hex"] {
  const hex = [r, g, b, a]
    .map((v, i) => (v !== undefined ? (i < 3 ? v : Math.round(v * 255)).toString(16).padStart(2, "0") : ""))
    .join("");

  return `#${hex}`;
}
