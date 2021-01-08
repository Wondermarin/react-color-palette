import { SaturationProps } from "./Saturation.types";
import { useRef, useEffect, useMemo } from "react";
import { getCoordinatesByColor, moveAt, getColorByCoordinates } from "../../utils";

export const Saturation = ({ width, height, color, onChange }: SaturationProps): JSX.Element => {
  const saturationRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const drawSaturation = (): void => {
      if (saturationRef.current) {
        const ctx = saturationRef.current.getContext("2d");

        if (ctx) {
          const saturation = ctx.createLinearGradient(0, height / 2, width, height / 2);

          saturation.addColorStop(0, "white");
          saturation.addColorStop(1, `hsl(${color.hsb.h}, 100%, 50%)`);

          ctx.fillStyle = saturation;
          ctx.fillRect(0, 0, width, height);

          const brightness = ctx.createLinearGradient(width / 2, 0, width / 2, height);

          brightness.addColorStop(0, "transparent");
          brightness.addColorStop(1, "black");

          ctx.fillStyle = brightness;
          ctx.fillRect(0, 0, width, height);
        }
      }
    };

    drawSaturation();
  }, [color.hsb.h, width, height]);

  const position = useMemo(() => {
    const [x, y] = getCoordinatesByColor(color, width, height);

    return { x, y };
  }, [color, width, height]);

  const moveCursor = (x: number, y: number, shiftX: number, shiftY: number): void => {
    const [newX, newY] = moveAt(
      { value: x, shift: shiftX, min: 0, max: width },
      { value: y, shift: shiftY, min: 0, max: height }
    );

    const newColor = getColorByCoordinates(color.hsb.h, newX, newY, width, height);

    onChange(newColor);
  };

  const onMouseDown = (e: React.MouseEvent): void => {
    if (saturationRef.current) {
      if (e.button !== 0) return;

      const { current: saturation } = saturationRef;

      document.getSelection()?.empty();

      const { left: shiftX, top: shiftY } = saturation.getBoundingClientRect();

      moveCursor(e.clientX, e.clientY, shiftX, shiftY);

      const onMouseMove = (e: MouseEvent): void => {
        moveCursor(e.clientX, e.clientY, shiftX, shiftY);
      };

      const onMouseUp = (): void => {
        document.removeEventListener("mousemove", onMouseMove, false);
        document.removeEventListener("mouseup", onMouseUp, false);
      };

      document.addEventListener("mousemove", onMouseMove, false);
      document.addEventListener("mouseup", onMouseUp, false);
    }
  };

  return (
    <div className="rcp-saturation" onMouseDown={onMouseDown}>
      <canvas ref={saturationRef} width={width} height={height} />
      <div
        className="rcp-saturation-cursor"
        style={{ left: position.x, top: position.y, backgroundColor: color.hex }}
      />
    </div>
  );
};
