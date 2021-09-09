import React, { useCallback, useMemo, useRef } from "react";
import { HueProps } from "../interfaces/Hue.interface";
import { getHueCoordinates } from "../utils/coordinates.util";
import { toColor } from "../utils/toColor.util";
import { Interactive } from "./Interactive.component";

export const Hue = ({ width, color, onChange }: HueProps): JSX.Element => {
  const position = useMemo(() => {
    const x = getHueCoordinates(color.hsv.h, width);

    return x;
  }, [color.hsv.h, width]);

  const colorRef = useRef(color);

  const updateColor = useCallback(
    (x: number): void => {
      onChange(toColor("hsv", { ...colorRef.current.hsv, h: (x / width) * 360 }));
    },
    [onChange, width]
  );

  return (
    <Interactive className="rcp-hue" onChange={updateColor}>
      <div className="rcp-hue-cursor" style={{ left: position, backgroundColor: `hsl(${color.hsv.h}, 100%, 50%)` }} />
    </Interactive>
  );
};
