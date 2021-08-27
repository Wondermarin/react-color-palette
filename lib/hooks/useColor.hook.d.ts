/// <reference types="react" />
import { Color } from "../interfaces/Color.interface";
/**
 * Returns a stateful [Color](https://github.com/Wondermarin/react-color-palette#color), and a function to update it.
 * @param model HEX.
 * @param initColor Color in HEX model (3-6 digit or 4-8 digit with alpha) or [HTML Color Names](https://www.w3.org/wiki/CSS/Properties/color/keywords).
 */
export declare function useColor(model: "hex", initColor: Color["hex"]): [Color, React.Dispatch<React.SetStateAction<Color>>];
/**
 * Returns a stateful [Color](https://github.com/Wondermarin/react-color-palette#color), and a function to update it.
 * @param model RGB.
 * @param initColor Color in RGB model.
 */
export declare function useColor(model: "rgb", initColor: Color["rgb"]): [Color, React.Dispatch<React.SetStateAction<Color>>];
/**
 * Returns a stateful [Color](https://github.com/Wondermarin/react-color-palette#color), and a function to update it.
 * @param model HSV.
 * @param initColor Color in HSV model.
 */
export declare function useColor(model: "hsv", initColor: Color["hsv"]): [Color, React.Dispatch<React.SetStateAction<Color>>];
