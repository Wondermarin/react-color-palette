import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { moveAt, getColor, changeHue, getColorCoordinates } from "./utils";

import { ColorPickerProps } from "./types";

const Palette = styled.div`
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
  pointer-events: none;
  box-sizing: content-box;
`;

export const ColorPicker = ({
  width,
  color,
  setColor,
  hue,
  setHue,
}: ColorPickerProps) => {
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
            width / 2,
            width,
            width / 2
          );

          saturation.addColorStop(0, "white");
          saturation.addColorStop(1, `hsl(${hue}, 100%, 50%)`);

          ctx.fillStyle = saturation;
          ctx.fillRect(0, 0, width, width);

          const brightness = ctx.createLinearGradient(
            width / 2,
            0,
            width / 2,
            width
          );

          brightness.addColorStop(0, "transparent");
          brightness.addColorStop(1, "black");

          ctx.fillStyle = brightness;
          ctx.fillRect(0, 0, width, width);
        }
      }
    };

    if (palette.current) drawPalette();
  }, [palette, width, hue]);

  useEffect(() => {
    if (!color.inputted) {
      const newColor = changeHue(hue, color.hsb, false);

      setColor(newColor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hue]);

  useEffect(() => {
    if (palette.current && color.inputted) {
      const [hue, x, y] = getColorCoordinates(color, palette.current);

      setHue(hue);
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
      const color = getColor(hue, x, y, palette.current, false);

      setColor(color);
    }
  };

  const mouseDown = (e: React.MouseEvent) => {
    if (palette.current) {
      if (e.button === 2) return;

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
    } else {
      return;
    }
  };

  return (
    <Palette>
      <canvas
        ref={palette}
        width={width}
        height={width}
        onMouseDown={mouseDown}
      />
      <Cursor style={{ left: x, top: y, backgroundColor: color.hex }} />
    </Palette>
  );
};
