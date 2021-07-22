import React, { StrictMode, useState } from "react";
import { render } from "react-dom";
import { ColorPicker, useColor } from "../src";
import "../src/css/styles.css";

function App(): JSX.Element {
  const [color, setColor] = useColor("hex", "#121212");

  const [options, setOptions] = useState({
    hideHEX: false,
    hideRGB: false,
    hideHSV: false,
    alpha: false,
    dark: true,
  });

  const changeOption = (option: keyof typeof options, value: any): void =>
    setOptions({
      ...options,
      [option]: value,
    });

  return (
    <main>
      <div className="mainFloor">
        <button className="mainButton" onClick={(): void => changeOption("dark", !options.dark)}>
          Switch Theme
        </button>
      </div>
      <div className="mainFloor">
        <button className="mainButton" onClick={(): void => changeOption("alpha", !options.alpha)}>
          {!options.alpha ? "Enable Alpha Channel" : "Disable Alpha Channel"}
        </button>
        <button className="mainButton" onClick={(): void => changeOption("hideHEX", !options.hideHEX)}>
          {options.hideHEX ? "Enable HEX" : "Disable HEX"}
        </button>
        <button className="mainButton" onClick={(): void => changeOption("hideRGB", !options.hideRGB)}>
          {options.hideRGB ? "Enable RGB" : "Disable RGB"}
        </button>
        <button className="mainButton" onClick={(): void => changeOption("hideHSV", !options.hideHSV)}>
          {options.hideHSV ? "Enable HSV" : "Disable HSV"}
        </button>
      </div>
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
    </main>
  );
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app")
);
