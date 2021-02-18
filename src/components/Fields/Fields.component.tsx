import { FieldsProps } from "./Fields.types";
import { useCallback, useState, useEffect } from "react";
import { toColor, isValidHEX, toValidRGB, toValidHSB } from "../../utils";

export const Fields = ({ color, hideHEX, hideHSB, hideRGB, onChange }: FieldsProps): JSX.Element => {
  const getValueHEX = useCallback(
    () => ({
      value: color.hex,
      inputted: false,
    }),
    [color.hex]
  );

  const getValueRGB = useCallback(
    () => ({
      value: `${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`,
      inputted: false,
    }),
    [color.rgb]
  );

  const getValueHSB = useCallback(
    () => ({
      value: `${Math.round(color.hsb.h)}°, ${Math.round(color.hsb.s)}%, ${Math.round(color.hsb.b)}%`,
      inputted: false,
    }),
    [color.hsb]
  );

  const [valueHEX, setValueHEX] = useState(getValueHEX);
  const [valueRGB, setValueRGB] = useState(getValueRGB);
  const [valueHSB, setValueHSB] = useState(getValueHSB);

  useEffect(() => {
    if (!valueHEX.inputted) {
      setValueHEX(getValueHEX);
    }
  }, [valueHEX.inputted, getValueHEX]);

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

  const changeHEX = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;

    if (isValidHEX(value)) {
      onChange(toColor("hex", value));
      setValueHEX({ ...valueHEX, value });
    }
  };

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

  const renderHEXField = (): JSX.Element => {
    if (hideHEX) {
      return <></>;
    }

    return (
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
    );
  };

  const renderRGBField = (): JSX.Element => {
    if (hideRGB) {
      return <></>;
    }

    return (
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
    );
  };

  const renderHSBField = (): JSX.Element => {
    if (hideHSB) {
      return <></>;
    }

    return (
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
    );
  };

  return (
    <div className="rcp-fields">
      {renderHEXField()}
      <div className="rcp-fields-floor">
        {renderRGBField()}
        {renderHSBField()}
      </div>
    </div>
  );
};
