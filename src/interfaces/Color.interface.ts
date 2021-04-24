export interface Color {
  readonly hex: string;
  readonly rgb: ColorRGB;
  readonly hsv: ColorHSV;
}

interface ColorRGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

interface ColorHSV {
  readonly h: number;
  readonly s: number;
  readonly v: number;
}
