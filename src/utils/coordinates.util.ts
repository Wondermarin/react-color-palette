import { Color } from "@interfaces/Color.interface";

export function getColorCoordinates(color: Color, width: number, height: number): [number, number] {
  const { s, v } = color.hsv;

  const x = (s / 100) * width;
  const y = ((100 - v) / 100) * height;

  return [x, y];
}

export function getHueCoordinates(h: number, width: number): number {
  const x = (h / 360) * width;

  return x;
}
