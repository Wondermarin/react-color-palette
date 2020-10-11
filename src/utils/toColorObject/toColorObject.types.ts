export interface ColorObject {
  hsb: {
    h: number;
    s: number;
    b: number;
  };
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  hex: string;
}

export type ColorModels = "hex" | "rgb" | "hsb";
