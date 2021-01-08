export interface Color {
  readonly hex: string;
  readonly rgb: ColorRGB;
  readonly hsb: ColorHSB;
}

interface ColorRGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

interface ColorHSB {
  readonly h: number;
  readonly s: number;
  readonly b: number;
}
