import { Color } from "./toColor.types";
import { toValidHEX } from "../toValidHEX";
import { hex2rgb } from "../hex2rgb";
import { rgb2hsb } from "../rgb2hsb";
import { rgb2hex } from "../rgb2hex";
import { hsb2rgb } from "../hsb2rgb";

/**
 * Converts a color in HEX format to `Color`.
 * @param format HEX.
 * @param color Color in HEX format (3-6 digit) or HTML Color Names.
 * @see [WHAT IS "COLOR"?](https://github.com/Wondermarin/react-color-palette#color)
 */
export function toColor(format: "hex", color: Color["hex"]): Color;
/**
 * Converts a color in RGB format to `Color`.
 * @param format RGB.
 * @param color Color in RGB format.
 * @see [WHAT IS "COLOR"?](https://github.com/Wondermarin/react-color-palette#color)
 */
export function toColor(format: "rgb", color: Color["rgb"]): Color;
/**
 * Converts a color in HSB format to `Color`.
 * @param format HSB.
 * @param color Color in HSB format.
 * @see [WHAT IS "COLOR"?](https://github.com/Wondermarin/react-color-palette#color)
 */
export function toColor(format: "hsb", color: Color["hsb"]): Color;
export function toColor<F extends keyof Color, C extends Color[F]>(format: F, color: C): Color {
  let hex: Color["hex"];
  let rgb: Color["rgb"];
  let hsb: Color["hsb"];

  if (format === "hex") {
    const newColor = color as Color["hex"];

    hex = toValidHEX(newColor);
    rgb = hex2rgb(hex);
    hsb = rgb2hsb(rgb.r, rgb.g, rgb.b);
  } else if (format === "rgb") {
    const newColor = color as Color["rgb"];

    rgb = newColor;
    hex = rgb2hex(rgb.r, rgb.g, rgb.b);
    hsb = rgb2hsb(rgb.r, rgb.g, rgb.b);
  } else if (format === "hsb") {
    const newColor = color as Color["hsb"];

    hsb = newColor;
    rgb = hsb2rgb(hsb.h, hsb.s, hsb.b);
    hex = rgb2hex(rgb.r, rgb.g, rgb.b);
  } else {
    hex = "#000000";
    rgb = hex2rgb(hex);
    hsb = rgb2hsb(rgb.r, rgb.g, rgb.b);
  }

  return {
    hex,
    rgb,
    hsb,
  };
}
