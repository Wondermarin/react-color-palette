import { StrictMode } from "react";
import { render } from "react-dom";
import ColorPicker, { useColor } from "../src";
import "../src/css/styles.css";

function App(): JSX.Element {
  const [color, setColor] = useColor("hex", "#121212");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#121212",
      }}
    >
      <ColorPicker width={456} height={228} color={color} onChange={setColor} dark />
    </div>
  );
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app")
);
