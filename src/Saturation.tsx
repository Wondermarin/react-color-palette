import React, { Dispatch, useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { getColor, getColorCoordinates, moveAt } from "./utils";

import { ColorObject } from ".";

interface SaturationProps {
  paletteWidth: number;
  color: ColorObject;
  setColor: Dispatch<ColorObject>;
}

const Body = styled.div`
  display: flex;

  position: relative;

  user-select: none;
`;

const Cursor = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 10px;
  height: 10px;

  background-color: white;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;

  transform: translate(-7px, -7px);

  box-sizing: content-box;
  pointer-events: none;
`;

export const Saturation = ({
  paletteWidth,
  color,
  setColor,
}: SaturationProps) => {
  const palette = useRef<HTMLCanvasElement>(null);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const drawPalette = () => {
      if (palette.current) {
        const ctx = palette.current.getContext("2d");

        if (ctx) {
          const saturation = ctx.createLinearGradient(
            0,
            paletteWidth / 2,
            paletteWidth,
            paletteWidth / 2
          );

          saturation.addColorStop(0, "white");
          saturation.addColorStop(1, `hsl(${color.hsb[0]}, 100%, 50%)`);

          ctx.fillStyle = saturation;
          ctx.fillRect(0, 0, paletteWidth, paletteWidth);

          const brightness = ctx.createLinearGradient(
            paletteWidth / 2,
            0,
            paletteWidth / 2,
            paletteWidth
          );

          brightness.addColorStop(0, "transparent");
          brightness.addColorStop(1, "black");

          ctx.fillStyle = brightness;
          ctx.fillRect(0, 0, paletteWidth, paletteWidth);
        }
      }
    };

    if (palette.current) drawPalette();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [palette, paletteWidth, color.hsb[0]]);

  useEffect(() => {
    if (palette.current && color.inputted) {
      const [x, y] = getColorCoordinates(color, palette.current);

      setX(x);
      setY(y);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  const moveCursor = (
    e: React.MouseEvent | MouseEvent,
    shiftX: number,
    shiftY: number
  ) => {
    if (palette.current) {
      const [x, y] = moveAt(
        false,
        e.clientX,
        shiftX,
        0,
        palette.current.offsetWidth,
        setX,
        e.clientY,
        shiftY,
        0,
        palette.current.offsetHeight,
        setY
      );
      const newColor = getColor(color.hsb[0], x, y, palette.current, false);

      setColor(newColor);
    }
  };

  const mouseDown = (e: React.MouseEvent) => {
    if (palette.current) {
      if (e.button !== 0) return;

      document.getSelection()?.empty();

      const {
        left: shiftX,
        top: shiftY,
      } = palette.current.getBoundingClientRect();

      moveCursor(e, shiftX, shiftY);

      const mouseMove = (e: MouseEvent) => moveCursor(e, shiftX, shiftY);
      const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
      };

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
    }
  };

  return (
    <Body>
      <canvas
        ref={palette}
        width={paletteWidth}
        height={paletteWidth}
        onMouseDown={mouseDown}
      />
      <Cursor style={{ left: x, top: y, backgroundColor: color.hex }} />
    </Body>
  );
};
