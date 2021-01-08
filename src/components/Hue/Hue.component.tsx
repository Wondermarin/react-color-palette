import { HueProps } from "./Hue.types";
import { useRef, useMemo } from "react";
import { getCoordinatesByHue, moveAt, getHueByCoordinates, toColor } from "../../utils";

export const Hue = ({ width, color, onChange }: HueProps): JSX.Element => {
  const hueRef = useRef<HTMLDivElement>(null);

  const position = useMemo(() => {
    const x = getCoordinatesByHue(color.hsb.h, width);

    return x;
  }, [color.hsb.h, width]);

  const moveCursor = (x: number, shiftX: number): void => {
    const [newX] = moveAt({ value: x, shift: shiftX, min: 0, max: width });

    const newHue = getHueByCoordinates(newX, width);

    onChange(toColor("hsb", { ...color.hsb, h: newHue }));
  };

  const onMouseDown = (e: React.MouseEvent): void => {
    if (hueRef.current) {
      if (e.button !== 0) return;

      const { current: hue } = hueRef;

      document.getSelection()?.empty();

      const { left: shiftX } = hue.getBoundingClientRect();

      moveCursor(e.clientX, shiftX);

      const onMouseMove = (e: MouseEvent): void => {
        moveCursor(e.clientX, shiftX);
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
    <div ref={hueRef} className="rcp-hue" onMouseDown={onMouseDown}>
      <div className="rcp-hue-cursor" style={{ left: position, backgroundColor: `hsl(${color.hsb.h}, 100%, 50%)` }} />
    </div>
  );
};
