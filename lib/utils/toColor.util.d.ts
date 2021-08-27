import { Color } from "../interfaces/Color.interface";
/**
 * Converts the color from HEX model to [Color](https://github.com/Wondermarin/react-color-palette#color).
 * @param model HEX.
 * @param color Color in HEX model (3-6 digit) or [HTML Color Names](https://www.w3.org/wiki/CSS/Properties/color/keywords).
 */
export declare function toColor(model: "hex", color: Color["hex"]): Color;
/**
 * Converts the color from RGB model to [Color](https://github.com/Wondermarin/react-color-palette#color).
 * @param model RGB.
 * @param color Color in RGB model.
 */
export declare function toColor(model: "rgb", color: Color["rgb"]): Color;
/**
 * Converts the color from HSV model to [Color](https://github.com/Wondermarin/react-color-palette#color).
 * @param model HSV.
 * @param color Color in HSV model.
 */
export declare function toColor(model: "hsv", color: Color["hsv"]): Color;
