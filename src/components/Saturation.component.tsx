import React, { useMemo } from "react";
import { SaturationProps } from "../interfaces/Saturation.interface";
import { getColorCoordinates } from "../utils/coordinates.util";
import { toColor } from "../utils/toColor.util";
import { Interactive } from "./Interactive.component";

export const Saturation = ({ width, height, color, onChange }: SaturationProps): JSX.Element => {
  const position = useMemo(() => {
    const [x, y] = getColorCoordinates(color, width, height);

    return { x, y };
  }, [color, width, height]);

  const updateColor = (x: number, y: number): void => {
    onChange(toColor("hsv", { ...color.hsv, s: (x / width) * 100, v: 100 - (y / height) * 100 }));
  };

  return (
    <Interactive
      className="rcp-saturation"
      style={{ width, height, backgroundColor: `hsl(${color.hsv.h}, 100%, 50%)` }}
      onChange={updateColor}
    >
      <div
        className="rcp-saturation-cursor"
        style={{ left: position.x, top: position.y, backgroundColor: color.hex }}
      />
    </Interactive>
  );
};
