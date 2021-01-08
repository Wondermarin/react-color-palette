import { Color, toColor } from "../toColor";
import { useCallback, useState, useEffect } from "react";

/**
 * Returns a stateful `Color`, and a function to update it.
 * @param format The color format.
 * @param initialColor The initial color in the selected color format.
 * @see [WHAT IS "COLOR"?](https://github.com/Wondermarin/react-color-palette#color)
 */
export function useColor<F extends keyof Color, C extends Color[F]>(
  format: F,
  initialColor: C
): [Color, (color: Color) => void] {
  const getColor = useCallback(() => {
    if (format === "hex") {
      const color = initialColor as Color["hex"];

      return toColor("hex", color);
    } else if (format === "rgb") {
      const color = initialColor as Color["rgb"];

      return toColor("rgb", color);
    } else if (format === "hsb") {
      const color = initialColor as Color["hsb"];

      return toColor("hsb", color);
    }

    return toColor("hex", "#000000");
  }, [format, initialColor]);

  const [color, setColor] = useState(getColor);

  useEffect(() => {
    setColor(getColor);
  }, [getColor]);

  return [color, setColor];
}
