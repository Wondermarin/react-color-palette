import styled from "styled-components";
import { SHueBarProps } from "./HueBar.types";

const HueBar = styled.div<SHueBarProps>`
  position: relative;

  width: ${(props): number => props.width}px;
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

  width: 12px;
  height: 12px;

  border: 2px solid white;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;

  transform: translate(-8px, -2px);

  box-sizing: content-box;
`;

export const S = {
  HueBar,
  HueBarCursor,
};
