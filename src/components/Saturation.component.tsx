import React, { useMemo } from "react";
import { InteractiveOnChangeProps } from "../interfaces/Interactive.interface";
import { SaturationProps } from "../interfaces/Saturation.interface";
import { getColorCoordinates } from "../utils/coordinates.util";
import { toColor } from "../utils/toColor.util";
import { Interactive } from "./Interactive.component";

export const Saturation = ({ width, height, color, onChange, onChangeComplete }: SaturationProps): JSX.Element => {
  const position = useMemo(() => {
    const [x, y] = getColorCoordinates(color, width, height);

    return { x, y };
  }, [color, width, height]);

  const updateColor = ({ x, y, complete = false }: InteractiveOnChangeProps): void => {
    const newColor = toColor("hsv", { ...color.hsv, s: (x / width) * 100, v: 100 - (y / height) * 100 });

    onChange(newColor);

    if (complete && onChangeComplete) onChangeComplete(newColor);
  };

  return (
    <Interactive
      className="rcp-saturation"
      style={{ height, backgroundColor: `hsl(${color.hsv.h}, 100%, 50%)` }}
      onChange={updateColor}
    >
      <div
        className="rcp-saturation-cursor"
        style={{ left: position.x, top: position.y, backgroundColor: color.hex }}
      />
    </Interactive>
  );
};
