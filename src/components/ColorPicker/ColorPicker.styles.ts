import styled from "styled-components";
import { ColorPickerBodyProps } from "./ColorPicker.types";

const ColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: max-content;

  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;
`;

const ColorPickerBody = styled.div<ColorPickerBodyProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${(props): number => props.width - 20}px;

  padding: 10px 0;
`;

export const S = {
  ColorPicker,
  ColorPickerBody,
};
