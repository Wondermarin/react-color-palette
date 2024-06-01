import React, { memo, useCallback, useEffect, useState } from "react";

import { ColorService, type IColor } from "@/services/color";

import { formatHsv, formatRgb } from "@/utils/format";
import { isFieldHide } from "@/utils/is-field-hide";

interface IFieldsProps {
  readonly hideInput: (keyof IColor)[] | boolean;
  readonly color: IColor;
  readonly onChange: (color: IColor) => void;
  readonly disabled: boolean;
}

export const Fields = memo(({ hideInput, color, onChange, disabled }: IFieldsProps) => {
  const [fields, setFields] = useState({
    hex: {
      value: color.hex,
      inputted: false,
    },
    rgb: {
      value: formatRgb(color.rgb),
      inputted: false,
    },
    hsv: {
      value: formatHsv(color.hsv),
      inputted: false,
    },
  });

  useEffect(() => {
    if (!fields.hex.inputted) {
      setFields((fields) => ({ ...fields, hex: { ...fields.hex, value: color.hex } }));
    }
  }, [fields.hex.inputted, color.hex]);

  useEffect(() => {
    if (!fields.rgb.inputted) {
      setFields((fields) => ({ ...fields, rgb: { ...fields.rgb, value: formatRgb(color.rgb) } }));
    }
  }, [fields.rgb.inputted, color.rgb]);

  useEffect(() => {
    if (!fields.hsv.inputted) {
      setFields((fields) => ({ ...fields, hsv: { ...fields.hsv, value: formatHsv(color.hsv) } }));
    }
  }, [fields.hsv.inputted, color.hsv]);

  const onInputChange = useCallback(
    <T extends keyof typeof fields>(field: T) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setFields((fields) => ({ ...fields, [field]: { ...fields[field], value } }));

        if (field === "hsv") onChange(ColorService.convert("hsv", ColorService.toHsv(value)));
        else if (field === "rgb") onChange(ColorService.convert("rgb", ColorService.toRgb(value)));
        else onChange(ColorService.convert("hex", value));
      },
    [onChange]
  );

  const onInputFocus = useCallback(
    <T extends keyof typeof fields>(field: T) =>
      () => {
        setFields((fields) => ({ ...fields, [field]: { ...fields[field], inputted: true } }));
      },
    []
  );

  const onInputBlur = useCallback(
    <T extends keyof typeof fields>(field: T) =>
      () => {
        setFields((fields) => ({ ...fields, [field]: { ...fields[field], inputted: false } }));
      },
    []
  );

  return (
    <div className="rcp-fields">
      {!isFieldHide(hideInput, "hex") && (
        <div className="rcp-fields-floor">
          <div className="rcp-field">
            <input
              id="hex"
              className="rcp-field-input"
              value={fields.hex.value}
              disabled={disabled}
              onChange={onInputChange("hex")}
              onFocus={onInputFocus("hex")}
              onBlur={onInputBlur("hex")}
            />
            <label htmlFor="hex" className="rcp-field-label">
              HEX
            </label>
          </div>
        </div>
      )}
      {(!isFieldHide(hideInput, "rgb") || !isFieldHide(hideInput, "hsv")) && (
        <div className="rcp-fields-floor">
          {!isFieldHide(hideInput, "rgb") && (
            <div className="rcp-field">
              <input
                id="rgb"
                className="rcp-field-input"
                value={fields.rgb.value}
                disabled={disabled}
                onChange={onInputChange("rgb")}
                onFocus={onInputFocus("rgb")}
                onBlur={onInputBlur("rgb")}
              />
              <label htmlFor="rgb" className="rcp-field-label">
                RGB
              </label>
            </div>
          )}
          {!isFieldHide(hideInput, "hsv") && (
            <div className="rcp-field">
              <input
                id="hsv"
                className="rcp-field-input"
                value={fields.hsv.value}
                disabled={disabled}
                onChange={onInputChange("hsv")}
                onFocus={onInputFocus("hsv")}
                onBlur={onInputBlur("hsv")}
              />
              <label htmlFor="hsv" className="rcp-field-label">
                HSV
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
});
