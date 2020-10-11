import { toColorObject, ColorObject, ColorModels } from "../toColorObject";
import { useState } from "react";

/**
 * Converts a HEX color to 'ColorObject`.
 * @param model HEX.
 * @param initialColor The initial color in the HEX color model (3-6 digit) or HTML Color Names.
 */
export function useColorObject(
  model: "hex",
  initialColor: ColorObject["hex"]
): [ColorObject, (color: ColorObject) => void];
/**
 * Converts a RGB color to 'ColorObject`.
 * @param model RGB.
 * @param initialColor The initial color in the RGB color model.
 */
export function useColorObject(
  model: "rgb",
  initialColor: ColorObject["rgb"]
): [ColorObject, (color: ColorObject) => void];
/**
 * Converts a HSB color to 'ColorObject`.
 * @param model HSB.
 * @param initialColor The initial color in the HSB color model.
 */
export function useColorObject(
  model: "hsb",
  initialColor: ColorObject["hsb"]
): [ColorObject, (color: ColorObject) => void];
/**
 * Converts the color in the selected color model to `ColorObject`
 * @param model Color model.
 * @param initialColor The initial color in the selected color model.
 */
export function useColorObject<M extends ColorModels, C extends ColorObject[M]>(
  model: M,
  initialColor: C
): [ColorObject, (color: ColorObject) => void] {
  let colorObject: ColorObject;

  if (model === "hex") {
    const color = initialColor as ColorObject["hex"];

    colorObject = toColorObject("hex", color);
  } else if (model === "rgb") {
    const color = initialColor as ColorObject["rgb"];

    colorObject = toColorObject("rgb", { r: color.r, g: color.g, b: color.b });
  } else {
    const color = initialColor as ColorObject["hsb"];

    colorObject = toColorObject("hsb", { h: color.h, s: color.s, b: color.b });
  }

  const [color, setColor] = useState(colorObject);

  return [color, setColor];
}
