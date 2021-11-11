import React, { useMemo } from "react";
import { HueProps } from "../interfaces/Hue.interface";
import { InteractiveOnChangeProps } from "../interfaces/Interactive.interface";
import { getHueCoordinates } from "../utils/coordinates.util";
import { toColor } from "../utils/toColor.util";
import { Interactive } from "./Interactive.component";

export const Hue = ({ width, color, onChange, onChangeComplete }: HueProps): JSX.Element => {
  const position = useMemo(() => {
    const x = getHueCoordinates(color.hsv.h, width);

    return x;
  }, [color.hsv.h, width]);

  const updateColor = ({ x, complete = false }: InteractiveOnChangeProps): void => {
    const newColor = toColor("hsv", { ...color.hsv, h: (x / width) * 360 });

    onChange(newColor);

    if (complete && onChangeComplete) onChangeComplete(newColor);
  };

  return (
    <Interactive className="rcp-hue" onChange={updateColor}>
      <div className="rcp-hue-cursor" style={{ left: position, backgroundColor: `hsl(${color.hsv.h}, 100%, 50%)` }} />
    </Interactive>
  );
};
