import styled from "styled-components";

const Saturation = styled.div`
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

export const S = {
  Saturation,
  Cursor,
};
