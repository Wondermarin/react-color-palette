import { Color } from "../interfaces/Color.interface";
import { hex2rgb, hsv2rgb, rgb2hex, rgb2hsv, toHex } from "./convert.util";

/**
 * Converts the color from HEX model to [Color](https://github.com/Wondermarin/react-color-palette#color).
 * @param model HEX.
 * @param color Color in HEX model (3-6 digit) or [HTML Color Names](https://www.w3.org/wiki/CSS/Properties/color/keywords).
 */
export function toColor(model: "hex", color: Color["hex"]): Color;
/**
 * Converts the color from RGB model to [Color](https://github.com/Wondermarin/react-color-palette#color).
 * @param model RGB.
 * @param color Color in RGB model.
 */
export function toColor(model: "rgb", color: Color["rgb"]): Color;
/**
 * Converts the color from HSV model to [Color](https://github.com/Wondermarin/react-color-palette#color).
 * @param model HSV.
 * @param color Color in HSV model.
 */
export function toColor(model: "hsv", color: Color["hsv"]): Color;
export function toColor<M extends keyof Color, C extends Color[M]>(model: M, color: C): Color {
  let hex: Color["hex"] = toHex("#121212");
  let rgb: Color["rgb"] = hex2rgb(hex);
  let hsv: Color["hsv"] = rgb2hsv(rgb);

  if (model === "hex") {
    const value = color as Color["hex"];

    hex = toHex(value);
    rgb = hex2rgb(hex);
    hsv = rgb2hsv(rgb);
  } else if (model === "rgb") {
    const value = color as Color["rgb"];

    rgb = value;
    hex = rgb2hex(rgb);
    hsv = rgb2hsv(rgb);
  } else if (model === "hsv") {
    const value = color as Color["hsv"];

    hsv = value;
    rgb = hsv2rgb(hsv);
    hex = rgb2hex(rgb);
  }

  return { hex, rgb, hsv };
}
