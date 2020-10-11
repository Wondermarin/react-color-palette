import { ColorObject, toColorObject } from "../toColorObject";

/**
 * Changes the hue of `ColorObject`.
 * @param color `ColorObject`.
 * @param newHue New hue.
 */
export function changeHue(color: ColorObject, newHue: number): ColorObject {
  const hsb = { ...color.hsb, h: newHue };

  return toColorObject("hsb", hsb);
}
