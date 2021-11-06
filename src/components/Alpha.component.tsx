import React, { useMemo } from "react";
import { AlphaProps } from "../interfaces/Alpha.interface";
import { getAlphaCoordinates } from "../utils/coordinates.util";
import { toColor } from "../utils/toColor.util";
import { Interactive } from "./Interactive.component";

export const Alpha = ({ width, color, onChange }: AlphaProps): JSX.Element => {
  const position = useMemo(() => {
    const x = getAlphaCoordinates(color.hsv.a ?? 1, width);

    return x;
  }, [color.hsv.a, width]);

  const updateColor = (x: number): void => {
    onChange(toColor("hsv", { ...color.hsv, a: x / width }));
  };

  const rgb = useMemo(() => `${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`, [color.rgb]);
  const rgba = useMemo(() => `${rgb}, ${color.rgb.a ?? 1}`, [rgb, color.rgb.a]);

  const positionX = useMemo(() => -position - 2, [position]);

  return (
    <Interactive
      className="rcp-alpha"
      onChange={updateColor}
      style={{
        background: `linear-gradient(to right, rgba(${rgb}, 0), rgba(${rgb}, 1)) top left / auto auto,
              conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) top left / 12px 12px
              repeat`,
      }}
    >
      <div
        className="rcp-alpha-cursor"
        style={{
          left: position,
          background: `linear-gradient(to right, rgba(${rgba}), rgba(${rgba})) top left / auto auto,
                conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) ${positionX}px 2px / 12px 12px
                repeat`,
        }}
      />
    </Interactive>
  );
};
