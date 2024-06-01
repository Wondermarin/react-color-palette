import React, { memo, useCallback } from "react";

import { useBoundingClientRect } from "@/hooks/use-bounding-client-rect";

import { clamp } from "@/utils/clamp";

interface IInteractiveProps {
  readonly onCoordinateChange: (x: number, y: number) => void;
  readonly children: React.ReactNode;
  readonly disabled: boolean;
}

export const Interactive = memo(({ onCoordinateChange, children, disabled }: IInteractiveProps) => {
  const [interactiveRef, { width, height }, getPosition] = useBoundingClientRect<HTMLDivElement>();

  const move = useCallback(
    (event: React.PointerEvent<HTMLDivElement> | PointerEvent) => {
      const { left, top } = getPosition();

      const x = clamp(event.clientX - left, 0, width);
      const y = clamp(event.clientY - top, 0, height);

      onCoordinateChange(x, y);
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
        move(event);

        document.removeEventListener("pointermove", onPointerMove, false);
        document.removeEventListener("pointerup", onPointerUp, false);
      };

      document.addEventListener("pointermove", onPointerMove, false);
      document.addEventListener("pointerup", onPointerUp, false);
    },
    [move]
  );

  return (
    <div
      ref={interactiveRef}
      className="rcp-interactive"
      style={{ cursor: disabled ? "not-allowed" : "move" }}
      onPointerDown={disabled ? undefined : onPointerDown}
    >
      {children}
    </div>
  );
});
