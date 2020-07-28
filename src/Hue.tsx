import React, { Dispatch, useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { moveAt, getHue, changeHue, getHueCoordinates } from "./utils";

import { ColorObject } from ".";

export interface HueBarProps {
  paletteWidth: number;
}

export interface HueProps {
  paletteWidth: number;
  color: ColorObject;
  setColor: Dispatch<ColorObject>;
}

const HueBar = styled.div<HueBarProps>`
  position: relative;

  width: ${props => props.paletteWidth - 20}px;
  height: 12px;

  background-image: linear-gradient(
    to right,
    rgb(255, 0, 0),
    rgb(255, 255, 0),
    rgb(0, 255, 0),
    rgb(0, 255, 255),
    rgb(0, 0, 255),
    rgb(255, 0, 255),
    rgb(255, 0, 0)
  );
  border-radius: 10px;

  user-select: none;
`;

const HueBarCursor = styled.div`
  position: absolute;
  left: 8px;
  top: 0;

  width: 12px;
  height: 12px;

  border: 2px solid white;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;

  transform: translate(-8px, -2px);

  box-sizing: content-box;
`;

export const Hue = ({ paletteWidth, color, setColor }: HueProps) => {
  const hueBar = useRef<HTMLDivElement>(null);
  const hueBarCursor = useRef<HTMLDivElement>(null);

  const [x, setX] = useState(8);

  useEffect(() => {
    if (hueBar.current && hueBarCursor.current && color.inputted) {
      const x = getHueCoordinates(
        color.hsb[0],
        0 + hueBarCursor.current.offsetWidth / 2,
        hueBar.current.offsetWidth - hueBarCursor.current.offsetWidth / 2,
        hueBar.current.offsetWidth - hueBarCursor.current.offsetWidth,
        hueBarCursor.current.offsetWidth
      );

      setX(x);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color.hsb[0]]);

  const moveCursor = (e: React.MouseEvent | MouseEvent, shiftX: number) => {
    if (hueBar.current && hueBarCursor.current) {
      const [x] = moveAt(
        true,
        e.clientX,
        shiftX,
        0 + hueBarCursor.current.offsetWidth / 2,
        hueBar.current.offsetWidth - hueBarCursor.current.offsetWidth / 2,
        setX
      );
      const hue = getHue(
        x - hueBarCursor.current.offsetWidth / 2,
        hueBar.current.offsetWidth - hueBarCursor.current.offsetWidth
      );

      setColor(changeHue(color, hue));
    }
  };

  const mouseDown = (e: React.MouseEvent) => {
    if (hueBar.current) {
      if (e.button !== 0) return;

      document.getSelection()?.empty();

      const { left: shiftX } = hueBar.current.getBoundingClientRect();

      moveCursor(e, shiftX);

      const mouseMove = (e: MouseEvent) => moveCursor(e, shiftX);
      const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouoseup", mouseUp);
      };

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
    }
  };

  return (
    <HueBar ref={hueBar} paletteWidth={paletteWidth} onMouseDown={mouseDown}>
      <HueBarCursor
        ref={hueBarCursor}
        style={{ left: x, backgroundColor: `hsl(${color.hsb[0]}, 100%, 50%)` }}
      />
    </HueBar>
  );
};
