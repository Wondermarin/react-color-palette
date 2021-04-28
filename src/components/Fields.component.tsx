import React, { useCallback, useState, useEffect } from "react";
import { UpperFloorProps, LowerFloorProps, FieldsProps } from "../interfaces/Fields.interface";
import { toHsv, toRgb } from "../utils/convert.util";
import { toColor } from "../utils/toColor.util";
import { validHex } from "../utils/validate.util";

const UpperFloor = ({ color, hideHEX, onChange }: UpperFloorProps): JSX.Element => {
  const getValueHEX = useCallback(() => ({ value: color.hex, inputted: false }), [color.hex]);

  const [valueHEX, setValueHEX] = useState(getValueHEX);

  useEffect(() => {
    if (!valueHEX.inputted) {
      setValueHEX(getValueHEX);
    }
  }, [valueHEX.inputted, getValueHEX]);

  const changeHEX = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;

    if (validHex(value)) {
      onChange(toColor("hex", value));
      setValueHEX({ ...valueHEX, value });
    }
  };

  return (
    <>
      {!hideHEX && (
        <div className="rcp-fields-floor">
          <div className="rcp-fields-element">
            <input
              className="rcp-fields-element-input"
              value={valueHEX.value}
              onFocus={(): void => setValueHEX({ ...valueHEX, inputted: true })}
              onChange={changeHEX}
              onBlur={(): void => setValueHEX({ ...valueHEX, inputted: false })}
            />
            <label className="rcp-fields-element-label">HEX</label>
          </div>
        </div>
      )}
    </>
  );
};

const LowerFloor = ({ color, hideRGB, hideHSB, onChange }: LowerFloorProps): JSX.Element => {
  const getValueRGB = useCallback(
    () => ({ value: `${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`, inputted: false }),
    [color.rgb]
  );
  const getValueHSV = useCallback(
    () => ({
      value: `${Math.round(color.hsv.h)}°, ${Math.round(color.hsv.s)}%, ${Math.round(color.hsv.v)}%`,
      inputted: false,
    }),
    [color.hsv]
  );

  const [valueRGB, setValueRGB] = useState(getValueRGB);
  const [valueHSV, setValueHSV] = useState(getValueHSV);

  useEffect(() => {
    if (!valueRGB.inputted) {
      setValueRGB(getValueRGB);
    }
  }, [valueRGB.inputted, getValueRGB]);

  useEffect(() => {
    if (!valueHSV.inputted) {
      setValueHSV(getValueHSV);
    }
  }, [valueHSV.inputted, getValueHSV]);

  const changeRGB = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.match(/\d+/g);

    if (value && value.length === 3) {
      const rgb = toRgb(value.slice(0, 3));

      onChange(toColor("rgb", rgb));
    }

    setValueRGB({ ...valueRGB, value: e.target.value });
  };

  const changeHSB = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.match(/\d+/g);

    if (value && value.length === 3) {
      const hsb = toHsv(value.slice(0, 3));

      onChange(toColor("hsv", hsb));
    }

    setValueHSV({ ...valueHSV, value: e.target.value });
  };

  return (
    <>
      {(!hideRGB || !hideHSB) && (
        <div className="rcp-fields-floor">
          {!hideRGB && (
            <div className="rcp-fields-element">
              <input
                className="rcp-fields-element-input"
                value={valueRGB.value}
                onFocus={(): void => setValueRGB({ ...valueRGB, inputted: true })}
                onChange={changeRGB}
                onBlur={(): void => setValueRGB({ ...valueRGB, inputted: false })}
              />
              <label className="rcp-fields-element-label">RGB</label>
            </div>
          )}
          {!hideHSB && (
            <div className="rcp-fields-element">
              <input
                className="rcp-fields-element-input"
                value={valueHSV.value}
                onFocus={(): void => setValueHSV({ ...valueHSV, inputted: true })}
                onChange={changeHSB}
                onBlur={(): void => setValueHSV({ ...valueHSV, inputted: false })}
              />
              <label className="rcp-fields-element-label">HSV</label>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export const Fields = ({ color, hideHEX, hideRGB, hideHSB, onChange }: FieldsProps): JSX.Element => {
  return (
    <>
      {(!hideHEX || !hideRGB || !hideHSB) && (
        <div className="rcp-fields">
          <UpperFloor color={color} hideHEX={hideHEX} onChange={onChange} />
          <LowerFloor color={color} hideRGB={hideRGB} hideHSB={hideHSB} onChange={onChange} />
        </div>
      )}
    </>
  );
};
