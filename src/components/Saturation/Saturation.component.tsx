import { SaturationProps } from "./Saturation.types";
import { useRef, useMemo } from "react";
import { getCoordinatesByColor, moveAt, getColorByCoordinates } from "../../utils";

export const Saturation = ({ width, height, color, onChange }: SaturationProps): JSX.Element => {
  const saturationRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={saturationRef}
      className="rcp-saturation"
      style={{ height, backgroundColor: `hsl(${color.hsb.h}, 100%, 50%)` }}
      onMouseDown={onMouseDown}
    >
      <div
        className="rcp-saturation-cursor"
        style={{ left: position.x, top: position.y, backgroundColor: color.hex }}
      />
    </div>
  );
};
