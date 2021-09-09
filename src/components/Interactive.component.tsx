import React, { useCallback, useEffect, useRef } from "react";
import { InteractiveProps } from "../interfaces/Interactive.interface";
import { clamp } from "../utils/clamp.util";

const getPointerPositionPoint = (
  event: MouseEvent | TouchEvent
): {
  x: number;
  y: number;
} => {
  if (event instanceof TouchEvent) {
    return {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  } else {
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }
};

export const Interactive = ({ className, style, onChange, children }: InteractiveProps): JSX.Element => {
  const divRef = useRef<HTMLDivElement>(null);

  const move = useCallback(
    (clientX: number, clientY: number): void => {
      if (divRef.current) {
        const { current: div } = divRef;
        const { width, height, left, top } = div.getBoundingClientRect();

        const x = clamp(clientX - left, width, 0);
        const y = clamp(clientY - top, height, 0);

        onChange(x, y);
      }
    },
    [onChange]
  );

  const onPointerMove = useCallback(
    (event: MouseEvent | TouchEvent): void => {
      const point = getPointerPositionPoint(event);

      move(point.x, point.y);
    },
    [move]
  );

  const onPointerUp = useCallback((): void => {
    document.removeEventListener("mousemove", onPointerMove);
    document.removeEventListener("mouseup", onPointerUp);
    document.removeEventListener("touchmove", onPointerMove);
    document.removeEventListener("touchend", onPointerUp);
  }, [onPointerMove]);

  const onPointerDown = useCallback(
    (event: MouseEvent | TouchEvent): void => {
      if (event instanceof MouseEvent && event.button !== 0) {
        return;
      } else if (event.cancelable) {
        event.preventDefault();
      }

      const point = getPointerPositionPoint(event);

      move(point.x, point.y);

      document.addEventListener("mousemove", onPointerMove, {
        passive: false,
      });
      document.addEventListener("mouseup", onPointerUp, {
        passive: false,
      });
      document.addEventListener("touchmove", onPointerMove, {
        passive: false,
      });
      document.addEventListener("touchend", onPointerUp, {
        passive: false,
      });
    },
    [move, onPointerMove, onPointerUp]
  );

  useEffect(() => {
    const div = divRef.current;

    if (div) {
      div.addEventListener("mousedown", onPointerDown, {
        passive: false,
      });
      div.addEventListener("touchstart", onPointerDown, {
        passive: false,
      });
    }

    return (): void => {
      if (div) {
        div.removeEventListener("mousedown", onPointerDown);
        div.removeEventListener("touchstart", onPointerDown);
      }
    };
  }, [onPointerDown]);

  return (
    <div ref={divRef} className={className} style={style}>
      {children}
    </div>
  );
};
