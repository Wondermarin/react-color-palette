import { ColorPickerProps } from "./ColorPicker.types";
import { Saturation } from "../Saturation";
import { Hue } from "../Hue";
import { Fields } from "../Fields";
import "./styles.css";

const ColorPicker = ({
  width,
  height = width,
  color,
  onChange,
  hideHEX = false,
  hideRGB = false,
  hideHSB = false,
  dark = false,
}: ColorPickerProps): JSX.Element => (
  <div className={`rcp ${dark ? "rcp-dark" : "rcp-light"}`}>
    <Saturation width={width} height={height} color={color} onChange={onChange} />
    <div className="rcp-body" style={{ width: width - 32 }}>
      <Hue width={width - 32} color={color} onChange={onChange} />
      <Fields color={color} hideHEX={hideHEX} hideRGB={hideRGB} hideHSB={hideHSB} onChange={onChange} />
    </div>
  </div>
);

export default ColorPicker;
