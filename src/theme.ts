import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    dropDownText: string;
    dropDownBg: string;
    dropDownBgHover: string;
    dropDownMenuBg: string;
    dropDownMenuElementBgHover: string;
  }
}

export const lightTheme: DefaultTheme = {
  text: "#000000",
  dropDownText: "#ffffff",
  background: "#ffffff",
  dropDownBg: "#000000",
  dropDownBgHover: "#121212",
  dropDownMenuBg: "#ffffff",
  dropDownMenuElementBgHover: "#f3f3f3",
};
