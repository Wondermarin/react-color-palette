import React, { memo, useCallback, useState } from "react";

import { useBoundingClientRect } from "@/hooks/use-bounding-client-rect";

import { clamp } from "@/utils/clamp";

interface IInteractiveProps {
  readonly onCoordinateChange: (x: number, y: number) => void;
  readonly children: React.ReactNode;
}

export const Interactive = memo(({ onCoordinateChange, children }: IInteractiveProps) => {
  const [interactiveRef, setInteractiveRef] = useState<HTMLDivElement | null>(null);

  const { width, height, left, top } = useBoundingClientRect(interactiveRef);

  const move = useCallback(
    (event: React.PointerEvent<HTMLDivElement> | PointerEvent) => {
      const x = clamp(event.clientX - left, 0, width);
      const y = clamp(event.clientY - top, 0, height);

      onCoordinateChange(x, y);
    },
    [width, height, left, top, onCoordinateChange]
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
    <div ref={setInteractiveRef} className="rcp-interactive" onPointerDown={onPointerDown}>
      {children}
    </div>
  );
});
