import React from "react";
import ColorPicker, { useColorObject } from "./ColorPicker";

export const App = (): JSX.Element => {
  const [color, setColor] = useColorObject("hex", "#121212");

  return <ColorPicker width={400} color={color} onChange={setColor} />;
};
