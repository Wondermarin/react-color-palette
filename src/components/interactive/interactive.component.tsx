import React, { memo, useCallback } from "react";

import { useBoundingClientRect } from "@/hooks/use-bounding-client-rect";

import { clamp } from "@/utils/clamp";
import { isTouch } from "@/utils/is-touch";

interface IInteractiveProps {
  readonly onCoordinateChange: (final: boolean, x: number, y: number) => void;
  readonly children: React.ReactNode;
  readonly disabled?: boolean;
}

type TInteractionEvent = React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement> | MouseEvent | TouchEvent;
type TMoveEvent = React.MouseEvent<HTMLDivElement> | React.Touch | MouseEvent | Touch;

export const Interactive = memo(({ onCoordinateChange, children, disabled }: IInteractiveProps) => {
  const [interactiveRef, { width, height }, getPosition] = useBoundingClientRect<HTMLDivElement>();

  const move = useCallback(
    (event: TMoveEvent, final = false) => {
      const { left, top } = getPosition();

      const x = clamp(event.clientX - left, 0, width);
      const y = clamp(event.clientY - top, 0, height);

      onCoordinateChange(final, x, y);
    },
    [width, height, getPosition, onCoordinateChange]
  );

  const onStart = useCallback(
    (event: TInteractionEvent) => {
      if (!isTouch(event) && event.button !== 0) return;

      const onMove = (event: TInteractionEvent) => {
        move(isTouch(event) ? event.touches[0] : event);
      };

      const onEnd = (event: TInteractionEvent) => {
        move(isTouch(event) ? event.changedTouches[0] : event, true);

        document.removeEventListener(isTouch(event) ? "touchmove" : "mousemove", onMove, false);
        document.removeEventListener(isTouch(event) ? "touchend" : "mouseup", onEnd, false);
      };

      onMove(event);

      document.addEventListener(isTouch(event) ? "touchmove" : "mousemove", onMove, false);
      document.addEventListener(isTouch(event) ? "touchend" : "mouseup", onEnd, false);
    },
    [move]
  );

  return (
    <div
      ref={interactiveRef}
      className="rcp-interactive"
      onMouseDown={onStart}
      onTouchStart={onStart}
      aria-readonly={disabled}
    >
      {children}
    </div>
  );
});
