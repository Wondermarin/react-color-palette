import React, { useRef, useState, useEffect } from "react";
import { ColorModelsDropDownProps } from "./ColorModelsDropDown.types";
import { ColorModels } from "../../utils";
import { S } from "./ColorModelsDropDown.styles";

const models: ColorModels[] = ["hex", "rgb", "hsb"];

export const ColorModelsDropDown = ({ model, setModel }: ColorModelsDropDownProps): JSX.Element => {
  const dropDownRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const onClickOutside = (): void => {
      if (isExpanded) setIsExpanded(false);
    };

    document.addEventListener("click", onClickOutside, false);

    return (): void => {
      document.removeEventListener("click", onClickOutside, false);
    };
  }, [isExpanded]);

  const onTriggerClick = (): void => {
    setIsExpanded(!isExpanded);
  };

  const onModelClick = (model: ColorModels): void => {
    setModel(model);
  };

  return (
    <S.DropDown ref={dropDownRef}>
      <S.DropDownTrigger onClick={onTriggerClick}>{model.toUpperCase()}</S.DropDownTrigger>
      <S.DropDownMenu aria-expanded={isExpanded}>
        {models.map((model) => (
          <S.DropDownMenuModel key={model} onClick={(): void => onModelClick(model)}>
            {model.toUpperCase()}
          </S.DropDownMenuModel>
        ))}
      </S.DropDownMenu>
    </S.DropDown>
  );
};
