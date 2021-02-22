import { UpperFloorProps, LowerFloorProps, FieldsProps } from "./Fields.types";
import { useCallback, useState, useEffect } from "react";
import { toColor, isValidHEX, toValidRGB, toValidHSB } from "../../utils";

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

    if (isValidHEX(value)) {
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
  const getValueHSB = useCallback(
    () => ({
      value: `${Math.round(color.hsb.h)}°, ${Math.round(color.hsb.s)}%, ${Math.round(color.hsb.b)}%`,
      inputted: false,
    }),
    [color.hsb]
  );

  const [valueRGB, setValueRGB] = useState(getValueRGB);
  const [valueHSB, setValueHSB] = useState(getValueHSB);

  useEffect(() => {
    if (!valueRGB.inputted) {
      setValueRGB(getValueRGB);
    }
  }, [valueRGB.inputted, getValueRGB]);

  useEffect(() => {
    if (!valueHSB.inputted) {
      setValueHSB(getValueHSB);
    }
  }, [valueHSB.inputted, getValueHSB]);

  const changeRGB = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.match(/\d+/g);

    if (value && value.length === 3) {
      const rgb = toValidRGB(value.slice(0, 3));

      onChange(toColor("rgb", rgb));
    }

    setValueRGB({ ...valueRGB, value: e.target.value });
  };

  const changeHSB = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.match(/\d+/g);

    if (value && value.length === 3) {
      const hsb = toValidHSB(value.slice(0, 3));

      onChange(toColor("hsb", hsb));
    }

    setValueHSB({ ...valueHSB, value: e.target.value });
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
                value={valueHSB.value}
                onFocus={(): void => setValueHSB({ ...valueHSB, inputted: true })}
                onChange={changeHSB}
                onBlur={(): void => setValueHSB({ ...valueHSB, inputted: false })}
              />
              <label className="rcp-fields-element-label">HSB</label>
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
