import React, { useRef, useMemo, useEffect } from "react";
import { SaturationProps } from "./Saturation.types";
import { getCoordinatesByColor, moveAt, getColorByCoordinates } from "../../utils";
import { S } from "./Saturation.styles";

export const Saturation = ({ width, height, color, setColor }: SaturationProps): JSX.Element => {
  const paletteRef = useRef<HTMLCanvasElement>(null);

  const cursorPosition = useMemo(() => {
    const [x, y] = getCoordinatesByColor(color, width, height);

    return { x, y };
  }, [color, width, height]);

  useEffect(() => {
    const drawPalette = (): void => {
      if (paletteRef.current) {
        const ctx = paletteRef.current.getContext("2d");

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

    if (paletteRef.current) drawPalette();
  }, [color.hsb.h, width, height]);

  const moveCursor = (x: number, y: number, shiftX: number, shiftY: number): void => {
    const [newX, newY] = moveAt(
      { value: x, shift: shiftX, min: 0, max: width },
      { value: y, shift: shiftY, min: 0, max: height }
    );

    const newColor = getColorByCoordinates(color.hsb.h, newX, newY, width, height);

    setColor(newColor);
  };

  const onMouseDown = (e: React.MouseEvent): void => {
    if (paletteRef.current) {
      if (e.button !== 0) return;

      document.getSelection()?.empty();

      const { left: shiftX, top: shiftY } = paletteRef.current.getBoundingClientRect();

      moveCursor(e.clientX, e.clientY, shiftX, shiftY);

      const mouseMove = (e: MouseEvent): void => {
        moveCursor(e.clientX, e.clientY, shiftX, shiftY);
      };
      const mouseUp = (): void => {
        document.removeEventListener("mousemove", mouseMove, false);
        document.removeEventListener("mouseup", mouseUp, false);
      };

      document.addEventListener("mousemove", mouseMove, false);
      document.addEventListener("mouseup", mouseUp, false);
    }
  };

  return (
    <S.Saturation>
      <canvas ref={paletteRef} width={width} height={height} onMouseDown={onMouseDown} />
      <S.Cursor style={{ left: cursorPosition.x, top: cursorPosition.y, backgroundColor: color.hex }} />
    </S.Saturation>
  );
};
