import React from "react";
import { ColorPicker, useColor } from "../../../../src";
import "../../../../src/css/styles.css";
import { Options } from "../App/App.component";
import { MainStyles as S } from "./Main.styles";

interface MainProps {
  readonly options: Options;
}

export function Main({ options }: MainProps): JSX.Element {
  const [color, setColor] = useColor("hex", "#561ecb");

  return (
    <S.Main>
      <ColorPicker
        width={456}
        height={228}
        color={color}
        onChange={setColor}
        hideHEX={options.hideHEX}
        hideRGB={options.hideRGB}
        hideHSV={options.hideHSV}
        alpha={options.alpha}
        dark={options.dark}
      />
      <S.MainBody>
        <S.MainMeta>
          <S.MainMetaTitle>react-color-palette</S.MainMetaTitle>
          <S.MainMetaDesc>{`<ColorPicker />`} component for React</S.MainMetaDesc>
        </S.MainMeta>
        <S.MainSocial>
          <S.MainSocialItem href="https://github.com/Wondermarin/react-color-palette">
            <img src="github-logo.png" />
          </S.MainSocialItem>
        </S.MainSocial>
      </S.MainBody>
    </S.Main>
  );
}
