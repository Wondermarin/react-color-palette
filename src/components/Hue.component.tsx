import React, { useMemo } from "react";
import { HueProps } from "../interfaces/Hue.interface";
import { getHueCoordinates } from "../utils/coordinates.util";
import { toColor } from "../utils/toColor.util";
import { Interactive } from "./Interactive.component";

export const Hue = ({ width, color, onChange }: HueProps): JSX.Element => {
  const position = useMemo(() => {
    const x = getHueCoordinates(color.hsv.h, width);

    return x;
  }, [color.hsv.h, width]);

  const updateColor = (x: number): void => {
    onChange(toColor("hsv", { ...color.hsv, h: (x / width) * 360 }));
  };

  return (
    <Interactive className="rcp-hue" onChange={updateColor}>
      <div className="rcp-hue-cursor" style={{ left: position, backgroundColor: `hsl(${color.hsv.h}, 100%, 50%)` }} />
    </Interactive>
  );
};
