import React, { memo, useCallback, useMemo } from "react";

import { useBoundingClientRect } from "@/hooks/use-bounding-client-rect";

import { ColorService, type IColor } from "@/services/color";

import { Interactive } from "../interactive";

interface IAlphaProps {
  readonly color: IColor;
  readonly onChange: (color: IColor) => void;
  readonly onChangeComplete?: (color: IColor) => void;
}

export const Alpha = memo(({ color, onChange, onChangeComplete }: IAlphaProps) => {
  const [alphaRef, { width }] = useBoundingClientRect<HTMLDivElement>();

  const position = useMemo(() => {
    const x = color.hsv.a * width;

    return { x };
  }, [color.hsv.a, width]);

  const updateColor = useCallback(
    (final: boolean, x: number) => {
      const nextColor = ColorService.convert("hsv", {
        ...color.hsv,
        a: x / width,
      });

      onChange(nextColor);
      if (final) onChangeComplete?.(nextColor);
    },
    [color.hsv, width, onChange, onChangeComplete]
  );

  const rgb = useMemo(() => [color.rgb.r, color.rgb.g, color.rgb.b].join(" "), [color.rgb.r, color.rgb.g, color.rgb.b]);
  const rgba = useMemo(() => [rgb, color.rgb.a].join(" / "), [rgb, color.rgb.a]);

  return (
    <Interactive onCoordinateChange={updateColor}>
      <div
        ref={alphaRef}
        style={{
          background: `linear-gradient(to right, rgb(${rgb} / 0), rgb(${rgb} / 1)) top left / auto auto,
                      conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) top left / 12px 12px
                      repeat`,
        }}
        className="rcp-alpha"
      >
        <div
          style={{
            left: position.x,
            background: `linear-gradient(to right, rgb(${rgba}), rgb(${rgba})) top left / auto auto,
                        conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) ${
                          -position.x - 4
                        }px 2px / 12px 12px
                        repeat`,
          }}
          className="rcp-alpha-cursor"
        />
      </div>
    </Interactive>
  );
});
