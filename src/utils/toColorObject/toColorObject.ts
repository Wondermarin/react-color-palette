import { ColorModels, ColorObject } from "./toColorObject.types";
import { toHex } from "../toHex";
import { rgb2hex } from "../rgb2hex";
import { hsb2rgb } from "../hsb2rgb";
import { hex2rgb } from "../hex2rgb";
import { rgb2hsb } from "../rgb2hsb";

/**
 * Converts a HEX color to 'ColorObject`.
 * @param model HEX.
 * @param color The color in the HEX color model (3-6 digit) or HTML Color Names.
 */
export function toColorObject(model: "hex", color: ColorObject["hex"]): ColorObject;
/**
 * Converts a RGB color to 'ColorObject`.
 * @param model RGB.
 * @param color The color in the RGB color model.
 */
export function toColorObject(model: "rgb", color: ColorObject["rgb"]): ColorObject;
/**
 * Converts a HSB color to 'ColorObject`.
 * @param model HSB.
 * @param color The color in the HSB color model.
 */
export function toColorObject(model: "hsb", color: ColorObject["hsb"]): ColorObject;
/**
 * Converts the color in the selected color model to `ColorObject`.
 * @param model Color model.
 * @param color Color in the selected color model.
 */
export function toColorObject<M extends ColorModels, C extends ColorObject[M]>(model: M, color: C): ColorObject {
  let hex: ColorObject["hex"];
  let rgb: ColorObject["rgb"];
  let hsb: ColorObject["hsb"];

  if (model === "hex") {
    const newColor = color as ColorObject["hex"];

    if (!newColor.startsWith("#") || newColor.length === 4) {
      hex = toHex(newColor);
    } else if (newColor.length === 7) {
      hex = newColor;
    } else {
      hex = "#000000";
    }

    rgb = hex2rgb(hex);
    hsb = rgb2hsb(rgb.r, rgb.g, rgb.b);
  } else if (model === "rgb") {
    const newColor = color as ColorObject["rgb"];

    rgb = newColor;
    hex = rgb2hex(rgb.r, rgb.g, rgb.b);
    hsb = rgb2hsb(rgb.r, rgb.g, rgb.b);
  } else {
    const newColor = color as ColorObject["hsb"];

    hsb = newColor;
    rgb = hsb2rgb(hsb.h, hsb.s, hsb.b);
    hex = rgb2hex(rgb.r, rgb.g, rgb.b);
  }

  return {
    hsb: {
      h: hsb.h,
      s: hsb.s,
      b: hsb.b,
    },
    rgb: {
      r: rgb.r,
      g: rgb.g,
      b: rgb.b,
    },
    hex,
  };
}
