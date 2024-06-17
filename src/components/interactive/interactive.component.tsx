import React, { memo, useCallback } from "react";

import { useBoundingClientRect } from "@/hooks/use-bounding-client-rect";

import { clamp } from "@/utils/clamp";

interface IInteractiveProps {
  readonly onCoordinateChange: (x: number, y: number, final?: boolean) => void;
  readonly children: React.ReactNode;
}

export const Interactive = memo(({ onCoordinateChange, children }: IInteractiveProps) => {
  const [interactiveRef, { width, height }, getPosition] = useBoundingClientRect<HTMLDivElement>();

  const move = useCallback(
    (event: React.PointerEvent<HTMLDivElement> | PointerEvent, final = false) => {
      const { left, top } = getPosition();

      const x = clamp(event.clientX - left, 0, width);
      const y = clamp(event.clientY - top, 0, height);

      onCoordinateChange(x, y, final);
    },
    [width, height, getPosition, onCoordinateChange]
  );

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.button !== 0) return;

      move(event);

      const onPointerMove = (event: PointerEvent) => {
        move(event);
      };

      const onPointerUp = (event: PointerEvent) => {
        move(event, true);

        document.removeEventListener("pointermove", onPointerMove, false);
        document.removeEventListener("pointerup", onPointerUp, false);
      };

      document.addEventListener("pointermove", onPointerMove, false);
      document.addEventListener("pointerup", onPointerUp, false);
    },
    [move]
  );

  return (
    <div ref={interactiveRef} className="rcp-interactive" onPointerDown={onPointerDown}>
      {children}
    </div>
  );
});
