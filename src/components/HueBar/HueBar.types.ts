import { ColorObject } from "../../utils";

export interface HueBarProps {
  width: number;
  color: ColorObject;
  setColor: (color: ColorObject) => void;
}

export interface SHueBarProps {
  width: number;
}
