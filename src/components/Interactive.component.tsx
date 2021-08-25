import React, { useRef } from "react";
import { InteractiveProps, InteractiveCoordinates } from "../interfaces/Interactive.interface";
import { clamp } from "../utils/clamp.util";

export const Interactive = ({ className, style, onChange, children }: InteractiveProps): JSX.Element => {
  const divRef = useRef<HTMLDivElement>(null);

  const calculate = (e: React.MouseEvent | MouseEvent): null | InteractiveCoordinates => {
    if (!divRef.current) return null;

    const { current: div } = divRef;
    const { width, height, left, top } = div.getBoundingClientRect();

    const x = clamp(e.clientX - left, width, 0);
    const y = clamp(e.clientY - top, height, 0);

    return {
      x,
      y,
    };
  };

  const handleChange = (e: React.MouseEvent | MouseEvent, completed = false): void => {
    const coordinates = calculate(e);

    if (coordinates) {
      const { x, y } = coordinates;

      onChange(x, y, completed);
    }
  };

  const move = (e: React.MouseEvent | MouseEvent): void => {
    handleChange(e);
  };

  const onMouseDown = (e: React.MouseEvent): void => {
    if (e.button !== 0) return;

    move(e);

    const onMouseMove = (e: MouseEvent): void => {
      move(e);
    };

    const onMouseUp = (e: React.MouseEvent | MouseEvent): void => {
      document.removeEventListener("mousemove", onMouseMove, false);
      document.removeEventListener("mouseup", onMouseUp, false);
      handleChange(e, true);
    };

    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("mouseup", onMouseUp, false);
  };

  return (
    <div ref={divRef} className={className} style={style} onMouseDown={onMouseDown}>
      {children}
    </div>
  );
};
