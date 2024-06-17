import React, { memo, useCallback, useMemo } from "react";

import { useBoundingClientRect } from "@/hooks/use-bounding-client-rect";

import { ColorService, type IColor } from "@/services/color";

import { Interactive } from "../interactive";

interface IHueProps {
  readonly color: IColor;
  readonly onChange: (color: IColor) => void;
  readonly onChangeComplete?: (color: IColor) => void;
}

export const Hue = memo(({ color, onChange, onChangeComplete }: IHueProps) => {
  const [hueRef, { width }] = useBoundingClientRect<HTMLDivElement>();

  const position = useMemo(() => {
    const x = (color.hsv.h / 360) * width;

    return { x };
  }, [color.hsv.h, width]);

  const updateColor = useCallback(
    (x: number, _y: number, final?: boolean) => {
      const nextColor = ColorService.convert("hsv", {
        ...color.hsv,
        h: (x / width) * 360,
      });

      onChange(nextColor);
      if (final) onChangeComplete?.(nextColor);
    },
    [color.hsv, width, onChange, onChangeComplete]
  );

  const hsl = useMemo(() => [color.hsv.h, "100%", "50%"].join(" "), [color.hsv.h]);

  return (
    <Interactive onCoordinateChange={updateColor}>
      <div ref={hueRef} className="rcp-hue">
        <div style={{ left: position.x, backgroundColor: `hsl(${hsl})` }} className="rcp-hue-cursor" />
      </div>
    </Interactive>
  );
});
