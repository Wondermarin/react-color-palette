import { Dispatch } from "react";

export interface ColorObject {
  hsb: number[];
  rgb: number[];
  hex: string;
  inputted: boolean;
}

export interface Theme {
  text: string;
  background: string;
  dropDownText: string;
  dropDownBg: string;
  dropDownBgHover: string;
  dropDownMenuBg: string;
  dropDownMenuElementBgHover: string;
}

export interface StyleProps {
  theme: Theme;
}

export interface PaletteBodyStyleProps {
  width: number;
}

export interface ColorPaletteProps {
  width: number;
  color: ColorObject | string;
  onChange: (color: ColorObject) => void;
}

export interface ColorPickerProps {
  width: number;
  color: ColorObject;
  setColor: Dispatch<ColorObject>;
  hue: number;
  setHue: Dispatch<number>;
}

export interface HueBarStyleProps {
  width: number;
}

export interface HueProps {
  width: number;
  color: ColorObject;
  hue: number;
  setHue: Dispatch<number>;
}

export interface ColorInputStyleProps {
  lastInput?: boolean;
}

export interface ColorInputProps {
  color: ColorObject;
  setColor: Dispatch<ColorObject>;
}

export interface ColorModelDropDownProps {
  model: string;
  setModel: Dispatch<string>;
}
