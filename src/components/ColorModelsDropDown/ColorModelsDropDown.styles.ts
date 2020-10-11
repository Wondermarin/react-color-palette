import styled from "styled-components";

const DropDown = styled.div`
  position: relative;

  font-family: "Roboto", sans-serif;
`;

const DropDownTrigger = styled.div`
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;

  color: #ffffff;

  background-color: #121212;
  border-radius: 5px 0 0 5px;

  transition: background-color 0.2s;

  padding: 8px 15px;

  user-select: none;
  &:hover {
    background-color: #242424;
  }
`;

const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;

  width: fill-available;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);

  transform: translateY(10px);
  transition: transform 0.2s, opacity 0.2s, visibility 0.2s;

  padding: 10px 0;

  opacity: 0;
  visibility: hidden;
  z-index: 666;
  &[aria-expanded="true"] {
    transform: translateY(0);

    opacity: 1;
    visibility: visible;
  }
`;

const DropDownMenuModel = styled.div`
  cursor: pointer;

  display: inline-flex;
  justify-content: center;

  width: 100%;

  font-size: 14px;
  font-weight: 700;

  color: #000000;

  transition: background-color 0.2s;

  padding: 5px 0;

  user-select: none;
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const S = {
  DropDown,
  DropDownTrigger,
  DropDownMenu,
  DropDownMenuModel,
};
