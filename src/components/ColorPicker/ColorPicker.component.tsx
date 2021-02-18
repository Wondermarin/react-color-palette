import { ColorPickerProps } from "./ColorPicker.types";
import { Saturation } from "../Saturation";
import { Hue } from "../Hue";
import { Fields } from "../Fields";
import "./styles.css";

const ColorPicker = (props: ColorPickerProps): JSX.Element => {
  const {
    width,
    height = width,
    color,
    onChange,
    dark = false,
    hideHEX = false,
    hideHSB = false,
    hideRGB = false,
  } = props;

  return (
    <div className={`rcp ${dark ? "rcp-dark" : "rcp-light"}`}>
      <Saturation width={width} height={height} color={color} onChange={onChange} />
      <div className="rcp-body" style={{ width: width - 32 }}>
        <Hue width={width - 32} color={color} onChange={onChange} />
        <Fields color={color} onChange={onChange} hideHEX={hideHEX} hideHSB={hideHSB} hideRGB={hideRGB} />
      </div>
    </div>
  );
};

export default ColorPicker;
