import { Color } from "../interfaces/Color.interface";
export declare function toHex(value: string): Color["hex"];
export declare function toRgb(value: string[]): Color["rgb"];
export declare function toHsv(value: string[]): Color["hsv"];
export declare function hex2rgb(hex: Color["hex"]): Color["rgb"];
export declare function rgb2hsv({ r, g, b, a }: Color["rgb"]): Color["hsv"];
export declare function hsv2rgb({ h, s, v, a }: Color["hsv"]): Color["rgb"];
export declare function rgb2hex({ r, g, b, a }: Color["rgb"]): Color["hex"];
