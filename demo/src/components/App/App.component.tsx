import React, { useState } from "react";
import { globalStyles } from "../../styles/stitches.config";
import { Main } from "../Main/Main.component";
import { Controller } from "../Controller/Controller.component";

export interface Options {
  readonly hideHEX: boolean;
  readonly hideRGB: boolean;
  readonly hideHSV: boolean;
  readonly hideLabels: boolean;
  readonly alpha: boolean;
  readonly dark: boolean;
}

export function App(): JSX.Element {
  globalStyles();

  const [options, setOptions] = useState<Options>({
    hideHEX: false,
    hideRGB: false,
    hideHSV: false,
    hideLabels: false,
    alpha: false,
    dark: true,
  });

  const switchOption = (option: keyof Options): void =>
    setOptions({
      ...options,
      [option]: !options[option],
    });

  return (
    <main>
      <Controller options={options} switchOption={switchOption} />
      <Main options={options} />
    </main>
  );
}
