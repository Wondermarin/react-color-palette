import React, { Dispatch, useRef, useState, useEffect } from "react";
import styled from "styled-components";

export interface ColorModelDropDownProps {
  model: string;
  setModel: Dispatch<string>;
}

const DropDownRoot = styled.div`
  position: relative;

  font-family: "Roboto", sans-serif;
`;

const DropDownHeader = styled.div`
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;

  color: ${props => props.theme.dropDownText};

  background-color: ${props => props.theme.dropDownBg};
  border-radius: 5px 0 0 5px;

  transition: background-color 0.2s;

  padding: 8px 15px;

  user-select: none;
  &:hover {
    background-color: ${props => props.theme.dropDownBgHover};
  }
`;

const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;

  width: fill-available;

  background-color: ${props => props.theme.dropDownMenuBg};
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

const DropDownMenuElement = styled.div`
  cursor: pointer;

  display: inline-flex;
  justify-content: center;

  width: 100%;

  font-size: 14px;
  font-weight: 700;

  color: ${props => props.theme.text};

  transition: background-color 0.2s;

  padding: 5px 0;

  user-select: none;
  &:hover {
    background-color: ${props => props.theme.dropDownMenuElementBgHover};
  }
`;

export const ColorModelDropdown = ({
  model,
  setModel,
}: ColorModelDropDownProps) => {
  const root = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const clickOutside = () => isExpanded && setIsExpanded(false);

    document.addEventListener("click", clickOutside, false);

    return () => document.removeEventListener("click", clickOutside, false);
  }, [isExpanded]);

  const headerClick = () => setIsExpanded(!isExpanded);

  const menuElementClick = (e: React.MouseEvent) =>
    setModel(e.currentTarget.textContent!);

  return (
    <DropDownRoot ref={root}>
      <DropDownHeader onClick={headerClick}>{model}</DropDownHeader>
      <DropDownMenu aria-expanded={isExpanded}>
        <DropDownMenuElement onClick={menuElementClick}>
          HEX
        </DropDownMenuElement>
        <DropDownMenuElement onClick={menuElementClick}>
          RGB
        </DropDownMenuElement>
        <DropDownMenuElement onClick={menuElementClick}>
          HSB
        </DropDownMenuElement>
      </DropDownMenu>
    </DropDownRoot>
  );
};
