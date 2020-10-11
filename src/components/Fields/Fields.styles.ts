import styled from "styled-components";
import { SInputProps } from "./Fields.types";

const Fields = styled.div`
  display: flex;

  width: 100%;

  margin: 10px 0 0;
`;

const Input = styled.input<SInputProps>`
  width: 100%;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;

  color: #000000;

  border: 2px solid #121212;
  border-radius: ${(props): string | number => (props.last ? "0 5px 5px 0" : 0)};

  padding: 0 5px;

  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;

    -webkit-appearance: none;
  }
`;

export const S = {
  Fields,
  Input,
};
