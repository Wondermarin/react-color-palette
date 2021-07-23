import React from "react";
import { Options } from "../App/App.component";
import { ControllerStyles as S } from "./Controller.styles";

interface ControllerProps {
  readonly options: Options;
  readonly switchOption: (option: keyof Options) => void;
}

export function Controller({ options, switchOption }: ControllerProps): JSX.Element {
  return (
    <S.Controller>
      <S.ControllerMeta>
        <S.ControllerMetaTitle>Interactive Options</S.ControllerMetaTitle>
        <S.ControllerMetaDesc>Click to Try</S.ControllerMetaDesc>
      </S.ControllerMeta>
      <S.ControllerBody>
        <S.ControllerButton active={options.hideHEX} onClick={(): void => switchOption("hideHEX")}>
          Hide HEX Input
        </S.ControllerButton>
        <S.ControllerButton active={options.hideRGB} onClick={(): void => switchOption("hideRGB")}>
          Hide RGB Input
        </S.ControllerButton>
        <S.ControllerButton active={options.hideHSV} onClick={(): void => switchOption("hideHSV")}>
          Hide HSV Input
        </S.ControllerButton>
        <S.ControllerButton active={options.alpha} onClick={(): void => switchOption("alpha")}>
          Alpha Channel
        </S.ControllerButton>
        <S.ControllerButton active={options.dark} onClick={(): void => switchOption("dark")}>
          Dark Mode
        </S.ControllerButton>
      </S.ControllerBody>
    </S.Controller>
  );
}
