import { useEffect, useState } from "react";

import { ColorService, type IColor } from "@/services/color";

export function useColor(initialColor: string): [IColor, React.Dispatch<React.SetStateAction<IColor>>] {
  const [color, setColor] = useState(ColorService.convert("hex", initialColor));

  useEffect(() => {
    setColor(ColorService.convert("hex", initialColor));
  }, [initialColor]);

  return [color, setColor];
}
