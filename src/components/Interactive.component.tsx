import { useRef } from "react";
import { InteractiveProps } from "../interfaces/Interactive.interface";
import { clamp } from "../utils/clamp.util";

export const Interactive = ({ className, style, onChange, children }: InteractiveProps): JSX.Element => {
  const divRef = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent | MouseEvent): void => {
    if (divRef.current) {
      const { current: div } = divRef;
      const { width, height, left, top } = div.getBoundingClientRect();

      const x = clamp(e.clientX - left, width, 0);
      const y = clamp(e.clientY - top, height, 0);

      onChange(x, y);
    }
  };

  const onMouseDown = (e: React.MouseEvent): void => {
    if (e.button !== 0) return;

    move(e);

    const onMouseMove = (e: MouseEvent): void => {
      move(e);
    };

    const onMouseUp = (): void => {
      document.removeEventListener("mousemove", onMouseMove, false);
      document.removeEventListener("mouseup", onMouseUp, false);
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
