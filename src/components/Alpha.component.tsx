import React, { useMemo } from "react";
import { AlphaProps } from "../interfaces/Alpha.interface";
import { getAlphaCoordinates } from "../utils/coordinates.util";
import { toColor } from "../utils/toColor.util";
import { Interactive } from "./Interactive.component";

export const Alpha = ({ width, color, onChange }: AlphaProps): JSX.Element => {
  const position = useMemo(() => {
    const x = getAlphaCoordinates(color.hsv.a ?? 100, width);

    return x;
  }, [color.hsv.a, width]);

  const updateColor = (x: number): void => {
    onChange(toColor("hsv", { ...color.hsv, a: (x / width) * 100 }));
  };

  return (
    <Interactive className="rcp-alpha" onChange={updateColor}>
      <div
        className="rcp-alpha-cursor"
        style={{ left: position, backgroundColor: `hsl(0, 0%, ${color.hsv.a ?? 100}%)` }}
      />
    </Interactive>
  );
};
